(function() {var type_impls = {
"polkadot_service":[["<section id=\"impl-StructuralEq-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-StructuralEq-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;</h3></section>","StructuralEq","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-Clone-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Extrinsic: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#82\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, Header, Extrinsic&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    Extrinsic: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#82\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#82\">source</a><a href=\"#impl-Serialize-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    Extrinsic: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#82\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-TypeInfo-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; TypeInfo for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: TypeInfo + 'static,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Extrinsic&gt;: TypeInfo + 'static,\n    Extrinsic: TypeInfo + 'static,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-Decode-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; Decode for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: Decode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Extrinsic&gt;: Decode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;, Error&gt;<span class=\"where fmt-newline\">where\n    __CodecInputEdqy: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.75.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-Encode-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; Encode for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: Encode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Extrinsic&gt;: Encode,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)<span class=\"where fmt-newline\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Block-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#99-102\">source</a><a href=\"#impl-Block-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Extrinsic: <a class=\"trait\" href=\"polkadot_service/runtime_traits/trait.MaybeSerialize.html\" title=\"trait polkadot_service::runtime_traits::MaybeSerialize\">MaybeSerialize</a> + <a class=\"trait\" href=\"polkadot_service/runtime_traits/trait.Member.html\" title=\"trait polkadot_service::runtime_traits::Member\">Member</a> + Codec + <a class=\"trait\" href=\"polkadot_service/runtime_traits/trait.Extrinsic.html\" title=\"trait polkadot_service::runtime_traits::Extrinsic\">Extrinsic</a>,\n    Header: <a class=\"trait\" href=\"polkadot_service/trait.HeaderT.html\" title=\"trait polkadot_service::HeaderT\">Header</a> + <a class=\"trait\" href=\"polkadot_service/runtime_traits/trait.MaybeSerializeDeserialize.html\" title=\"trait polkadot_service::runtime_traits::MaybeSerializeDeserialize\">MaybeSerializeDeserialize</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Extrinsic\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Extrinsic\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_service/trait.BlockT.html#associatedtype.Extrinsic\" class=\"associatedtype\">Extrinsic</a> = Extrinsic</h4></section></summary><div class='docblock'>Type for extrinsics.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Header\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Header\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_service/trait.BlockT.html#associatedtype.Header\" class=\"associatedtype\">Header</a> = Header</h4></section></summary><div class='docblock'>Header type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Hash\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Hash\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polkadot_service/trait.BlockT.html#associatedtype.Hash\" class=\"associatedtype\">Hash</a> = &lt;&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Header\" title=\"type polkadot_service::BlockT::Header\">Header</a> as <a class=\"trait\" href=\"polkadot_service/trait.HeaderT.html\" title=\"trait polkadot_service::HeaderT\">Header</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.HeaderT.html#associatedtype.Hash\" title=\"type polkadot_service::HeaderT::Hash\">Hash</a></h4></section></summary><div class='docblock'>Block hash type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.header\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#108\">source</a><a href=\"#method.header\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_service/trait.BlockT.html#tymethod.header\" class=\"fn\">header</a>(&amp;self) -&gt; &amp;&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Header\" title=\"type polkadot_service::BlockT::Header\">Header</a></h4></section></summary><div class='docblock'>Returns a reference to the header.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extrinsics\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#111\">source</a><a href=\"#method.extrinsics\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_service/trait.BlockT.html#tymethod.extrinsics\" class=\"fn\">extrinsics</a>(&amp;self) -&gt; &amp;[&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Extrinsic\" title=\"type polkadot_service::BlockT::Extrinsic\">Extrinsic</a>]</h4></section></summary><div class='docblock'>Returns a reference to the list of extrinsics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deconstruct\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#114\">source</a><a href=\"#method.deconstruct\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_service/trait.BlockT.html#tymethod.deconstruct\" class=\"fn\">deconstruct</a>(\n    self\n) -&gt; (&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Header\" title=\"type polkadot_service::BlockT::Header\">Header</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Extrinsic\" title=\"type polkadot_service::BlockT::Extrinsic\">Extrinsic</a>&gt;)</h4></section></summary><div class='docblock'>Split the block into header and list of extrinsics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#117\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_service/trait.BlockT.html#tymethod.new\" class=\"fn\">new</a>(\n    header: &lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Header\" title=\"type polkadot_service::BlockT::Header\">Header</a>,\n    extrinsics: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Extrinsic\" title=\"type polkadot_service::BlockT::Extrinsic\">Extrinsic</a>&gt;\n) -&gt; <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;</h4></section></summary><div class='docblock'>Creates new block from header and extrinsics.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#120\">source</a><a href=\"#method.encode_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_service/trait.BlockT.html#tymethod.encode_from\" class=\"fn\">encode_from</a>(\n    header: &amp;&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Header\" title=\"type polkadot_service::BlockT::Header\">Header</a>,\n    extrinsics: &amp;[&lt;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt; as <a class=\"trait\" href=\"polkadot_service/trait.BlockT.html\" title=\"trait polkadot_service::BlockT\">Block</a>&gt;::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Extrinsic\" title=\"type polkadot_service::BlockT::Extrinsic\">Extrinsic</a>]\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Creates an encoded block from the given <code>header</code> and <code>extrinsics</code> without requiring the\ncreation of an instance.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/traits/mod.rs.html#1310\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polkadot_service/trait.BlockT.html#method.hash\" class=\"fn\">hash</a>(&amp;self) -&gt; Self::<a class=\"associatedtype\" href=\"polkadot_service/trait.BlockT.html#associatedtype.Hash\" title=\"type polkadot_service::BlockT::Hash\">Hash</a></h4></section></summary><div class='docblock'>Returns the hash of the block.</div></details></div></details>","Block","polkadot_service::Block"],["<section id=\"impl-EncodeLike-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-EncodeLike-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; EncodeLike for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: Encode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Extrinsic&gt;: Encode,</span></h3></section>","EncodeLike","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-PartialEq-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    Extrinsic: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","polkadot_service::Block"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-Debug-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Extrinsic: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","polkadot_service::Block"],["<section id=\"impl-Eq-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-Eq-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;<span class=\"where fmt-newline\">where\n    Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    Extrinsic: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","polkadot_service::Block"],["<section id=\"impl-StructuralPartialEq-for-Block%3CHeader,+Extrinsic%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/sp_runtime/generic/block.rs.html#81\">source</a><a href=\"#impl-StructuralPartialEq-for-Block%3CHeader,+Extrinsic%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Header, Extrinsic&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"polkadot_service/generic/struct.Block.html\" title=\"struct polkadot_service::generic::Block\">Block</a>&lt;Header, Extrinsic&gt;</h3></section>","StructuralPartialEq","polkadot_service::Block"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()