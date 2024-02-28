(function() {var implementors = {
"cumulus_client_consensus_aura":[["impl&lt;B, CIDP, W&gt; <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainConsensus.html\" title=\"trait cumulus_client_consensus_common::ParachainConsensus\">ParachainConsensus</a>&lt;B&gt; for <a class=\"struct\" href=\"cumulus_client_consensus_aura/struct.AuraConsensus.html\" title=\"struct cumulus_client_consensus_aura::AuraConsensus\">AuraConsensus</a>&lt;B, CIDP, W&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    CIDP: <a class=\"trait\" href=\"sp_inherents/client_side/trait.CreateInherentDataProviders.html\" title=\"trait sp_inherents::client_side::CreateInherentDataProviders\">CreateInherentDataProviders</a>&lt;B, (<a class=\"type\" href=\"polkadot_core_primitives/type.Hash.html\" title=\"type polkadot_core_primitives::Hash\">Hash</a>, <a class=\"struct\" href=\"polkadot_primitives/v6/struct.PersistedValidationData.html\" title=\"struct polkadot_primitives::v6::PersistedValidationData\">PersistedValidationData</a>)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    CIDP::<a class=\"associatedtype\" href=\"sp_inherents/client_side/trait.CreateInherentDataProviders.html#associatedtype.InherentDataProviders\" title=\"type sp_inherents::client_side::CreateInherentDataProviders::InherentDataProviders\">InherentDataProviders</a>: <a class=\"trait\" href=\"cumulus_client_consensus_aura/trait.InherentDataProviderExt.html\" title=\"trait cumulus_client_consensus_aura::InherentDataProviderExt\">InherentDataProviderExt</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    W: <a class=\"trait\" href=\"sc_consensus_slots/trait.SimpleSlotWorker.html\" title=\"trait sc_consensus_slots::SimpleSlotWorker\">SimpleSlotWorker</a>&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    W::<a class=\"associatedtype\" href=\"sc_consensus_slots/trait.SimpleSlotWorker.html#associatedtype.Proposer\" title=\"type sc_consensus_slots::SimpleSlotWorker::Proposer\">Proposer</a>: <a class=\"trait\" href=\"sp_consensus/trait.Proposer.html\" title=\"trait sp_consensus::Proposer\">Proposer</a>&lt;B, Proof = &lt;<a class=\"struct\" href=\"sp_consensus/struct.EnableProofRecording.html\" title=\"struct sp_consensus::EnableProofRecording\">EnableProofRecording</a> as <a class=\"trait\" href=\"sp_consensus/trait.ProofRecording.html\" title=\"trait sp_consensus::ProofRecording\">ProofRecording</a>&gt;::<a class=\"associatedtype\" href=\"sp_consensus/trait.ProofRecording.html#associatedtype.Proof\" title=\"type sp_consensus::ProofRecording::Proof\">Proof</a>&gt;,</span>"]],
"cumulus_client_consensus_common":[],
"cumulus_client_consensus_relay_chain":[["impl&lt;B, PF, BI, RCInterface, CIDP&gt; <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainConsensus.html\" title=\"trait cumulus_client_consensus_common::ParachainConsensus\">ParachainConsensus</a>&lt;B&gt; for <a class=\"struct\" href=\"cumulus_client_consensus_relay_chain/struct.RelayChainConsensus.html\" title=\"struct cumulus_client_consensus_relay_chain::RelayChainConsensus\">RelayChainConsensus</a>&lt;B, PF, BI, RCInterface, CIDP&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,\n    RCInterface: RelayChainInterface + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    BI: <a class=\"trait\" href=\"sc_consensus/block_import/trait.BlockImport.html\" title=\"trait sc_consensus::block_import::BlockImport\">BlockImport</a>&lt;B&gt; + <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainBlockImportMarker.html\" title=\"trait cumulus_client_consensus_common::ParachainBlockImportMarker\">ParachainBlockImportMarker</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    PF: <a class=\"trait\" href=\"sp_consensus/trait.Environment.html\" title=\"trait sp_consensus::Environment\">Environment</a>&lt;B&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    PF::<a class=\"associatedtype\" href=\"sp_consensus/trait.Environment.html#associatedtype.Proposer\" title=\"type sp_consensus::Environment::Proposer\">Proposer</a>: <a class=\"trait\" href=\"sp_consensus/trait.Proposer.html\" title=\"trait sp_consensus::Proposer\">Proposer</a>&lt;B, ProofRecording = <a class=\"struct\" href=\"sp_consensus/struct.EnableProofRecording.html\" title=\"struct sp_consensus::EnableProofRecording\">EnableProofRecording</a>, Proof = &lt;<a class=\"struct\" href=\"sp_consensus/struct.EnableProofRecording.html\" title=\"struct sp_consensus::EnableProofRecording\">EnableProofRecording</a> as <a class=\"trait\" href=\"sp_consensus/trait.ProofRecording.html\" title=\"trait sp_consensus::ProofRecording\">ProofRecording</a>&gt;::<a class=\"associatedtype\" href=\"sp_consensus/trait.ProofRecording.html#associatedtype.Proof\" title=\"type sp_consensus::ProofRecording::Proof\">Proof</a>&gt;,\n    CIDP: <a class=\"trait\" href=\"sp_inherents/client_side/trait.CreateInherentDataProviders.html\" title=\"trait sp_inherents::client_side::CreateInherentDataProviders\">CreateInherentDataProviders</a>&lt;B, (<a class=\"type\" href=\"polkadot_core_primitives/type.Hash.html\" title=\"type polkadot_core_primitives::Hash\">Hash</a>, <a class=\"struct\" href=\"polkadot_primitives/v6/struct.PersistedValidationData.html\" title=\"struct polkadot_primitives::v6::PersistedValidationData\">PersistedValidationData</a>)&gt;,</span>"]],
"polkadot_parachain":[["impl&lt;Client, AuraId&gt; <a class=\"trait\" href=\"cumulus_client_consensus_common/trait.ParachainConsensus.html\" title=\"trait cumulus_client_consensus_common::ParachainConsensus\">ParachainConsensus</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/block/struct.Block.html\" title=\"struct sp_runtime::generic::block::Block\">Block</a>&lt;<a class=\"struct\" href=\"sp_runtime/generic/header/struct.Header.html\" title=\"struct sp_runtime::generic::header::Header\">Header</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"sp_runtime/traits/struct.BlakeTwo256.html\" title=\"struct sp_runtime::traits::BlakeTwo256\">BlakeTwo256</a>&gt;, <a class=\"struct\" href=\"sp_runtime/struct.OpaqueExtrinsic.html\" title=\"struct sp_runtime::OpaqueExtrinsic\">OpaqueExtrinsic</a>&gt;&gt; for <a class=\"struct\" href=\"polkadot_parachain/service/struct.WaitForAuraConsensus.html\" title=\"struct polkadot_parachain::service::WaitForAuraConsensus\">WaitForAuraConsensus</a>&lt;Client, AuraId&gt;<span class=\"where fmt-newline\">where\n    Client: <a class=\"trait\" href=\"sp_api/trait.ProvideRuntimeApi.html\" title=\"trait sp_api::ProvideRuntimeApi\">ProvideRuntimeApi</a>&lt;<a class=\"type\" href=\"polkadot_parachain/service/type.Block.html\" title=\"type polkadot_parachain::service::Block\">Block</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    Client::<a class=\"associatedtype\" href=\"sp_api/trait.ProvideRuntimeApi.html#associatedtype.Api\" title=\"type sp_api::ProvideRuntimeApi::Api\">Api</a>: <a class=\"trait\" href=\"sp_consensus_aura/trait.AuraApi.html\" title=\"trait sp_consensus_aura::AuraApi\">AuraApi</a>&lt;<a class=\"type\" href=\"polkadot_parachain/service/type.Block.html\" title=\"type polkadot_parachain::service::Block\">Block</a>, AuraId&gt;,\n    AuraId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + Codec + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()