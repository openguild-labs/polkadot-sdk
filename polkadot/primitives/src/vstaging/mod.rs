// Copyright (C) Parity Technologies (UK) Ltd.
// This file is part of Polkadot.

// Polkadot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Polkadot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Polkadot.  If not, see <http://www.gnu.org/licenses/>.

//! Staging Primitives.

// Put any primitives used by staging APIs functions here
pub use crate::v6::*;
use sp_std::prelude::*;

use parity_scale_codec::{Decode, Encode};
use primitives::RuntimeDebug;
use scale_info::TypeInfo;

use crate::v6::Id as ParaId;

/// Approval voting configuration parameters
#[derive(
	RuntimeDebug,
	Copy,
	Clone,
	PartialEq,
	Encode,
	Decode,
	TypeInfo,
	serde::Serialize,
	serde::Deserialize,
)]
pub struct ApprovalVotingParams {
	/// The maximum number of candidates `approval-voting` can vote for with
	/// a single signatures.
	///
	/// Setting it to 1, means we send the approval as soon as we have it available.
	pub max_approval_coalesce_count: u32,
}

impl Default for ApprovalVotingParams {
	fn default() -> Self {
		Self { max_approval_coalesce_count: 1 }
	}
}

use bitvec::vec::BitVec;

/// Bit indices in the `HostConfiguration.node_features` that correspond to different node features.
pub type NodeFeatures = BitVec<u8, bitvec::order::Lsb0>;

/// Module containing feature-specific bit indices into the `NodeFeatures` bitvec.
pub mod node_features {
	/// A feature index used to indentify a bit into the node_features array stored
	/// in the HostConfiguration.
	#[repr(u8)]
	pub enum FeatureIndex {
		/// Tells if tranch0 assignments could be sent in a single certificate.
		/// Reserved for: `<https://github.com/paritytech/polkadot-sdk/issues/628>`
		EnableAssignmentsV2 = 0,
		/// This feature enables the extension of `BackedCandidate::validator_indices` by 8 bits.
		/// The value stored there represents the assumed core index where the candidates
		/// are backed. This is needed for the elastic scaling MVP.
		ElasticScalingMVP = 1,
		/// First unassigned feature bit.
		/// Every time a new feature flag is assigned it should take this value.
		/// and this should be incremented.
		FirstUnassigned = 2,
	}
}

/// Assignments as tracked in the scheduler [`ClaimQueue`].
#[derive(Encode, Decode, TypeInfo, RuntimeDebug, PartialEq, Clone)]
pub struct ParasEntry<N> {
	/// The underlying [`Assignment`].
	pub assignment: Assignment,
	/// The number of times the entry has timed out in availability already.
	pub availability_timeouts: u32,
	/// The block height until this entry needs to be backed.
	///
	/// If missed the entry will be removed from the claim queue without ever having occupied
	/// the core.
	pub ttl: N,
}

impl<N> ParasEntry<N> {
	/// Create a new `ParasEntry`.
	pub fn new(assignment: Assignment, now: N) -> Self {
		ParasEntry { assignment, availability_timeouts: 0, ttl: now }
	}

	/// Return `Id` from the underlying `Assignment`.
	pub fn para_id(&self) -> ParaId {
		self.assignment.para_id()
	}
}

/// Assignment (ParaId -> CoreIndex).
#[derive(Encode, Decode, TypeInfo, RuntimeDebug, Clone, PartialEq)]
pub enum Assignment {
	/// A pool assignment.
	Pool {
		/// The assigned para id.
		para_id: ParaId,
		/// The core index the para got assigned to.
		core_index: CoreIndex,
	},
	/// A bulk assignment.
	Bulk(ParaId),
}

impl Assignment {
	/// Returns the [`ParaId`] this assignment is associated to.
	pub fn para_id(&self) -> ParaId {
		match self {
			Self::Pool { para_id, .. } => *para_id,
			Self::Bulk(para_id) => *para_id,
		}
	}
}
