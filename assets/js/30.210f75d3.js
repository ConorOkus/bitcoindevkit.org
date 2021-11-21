(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{450:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("A new release of BDK is out: "),a("a",{attrs:{href:"https://crates.io/crates/bdk/0.8.0",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("v0.8.0")]),a("OutboundLink")],1),t._v(" brings new APIs and other minor bugfixes and internal improvements.")]),t._v(" "),a("p",[t._v("You can find the full "),a("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk/blob/67714adc80669129eff2cad8991609d3b1c41cb9/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("v0.8.0 changelog"),a("OutboundLink")],1),t._v(" on GitHub.")]),t._v(" "),a("h2",{attrs:{id:"whats-new-in-v080"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whats-new-in-v080"}},[t._v("#")]),t._v(" What's new in v0.8.0")]),t._v(" "),a("p",[t._v("Below are some highlights of the new release:")]),t._v(" "),a("h3",{attrs:{id:"getting-the-derivation-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-derivation-index"}},[t._v("#")]),t._v(" Getting the Derivation Index")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("Wallet::get_address()")]),t._v(" method now returns an "),a("a",{attrs:{href:"https://docs.rs/bdk/0.8.0/bdk/wallet/struct.AddressInfo.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("AddressInfo")]),a("OutboundLink")],1),t._v(" structure, rather than a simple "),a("code",[t._v("Address")]),t._v(". This new structure contains the address but also the derivation index, which can be useful in some contexts.")]),t._v(" "),a("p",[t._v("Since the structure implements "),a("code",[t._v("Deref<Target=Address>")]),t._v(" it can be used directly as a "),a("code",[t._v("&Address")]),t._v(", which simplifies migrating to this change a little bit.")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" address_info "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AddressInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Print the address and derivation index")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Address #{}: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" address_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the `AddressInfo` structure directly like an `Address`")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" script_pubkey "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" address_info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("script_pubkey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"explicitly-enable-non-all-sighashes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explicitly-enable-non-all-sighashes"}},[t._v("#")]),t._v(" Explicitly Enable non-ALL Sighashes")]),t._v(" "),a("p",[t._v("To mitigate potential attacks in multiparty protocols, this release includes a new "),a("a",{attrs:{href:"https://docs.rs/bdk/0.8.0/bdk/wallet/signer/struct.SignOptions.html#structfield.allow_all_sighashes",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("SignOptions::allow_all_sighashes")]),a("OutboundLink")],1),t._v(" option that must be explicitly enabled to let the signers produce signatures\nwith any non-ALL sighash.")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" psbt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Fails if the psbt uses non-ALL sighashes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" finalized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" psbt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Produces a signature successfully")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" finalized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" psbt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SignOptions")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" allow_all_sighashes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"contributors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributors"}},[t._v("#")]),t._v(" Contributors")]),t._v(" "),a("p",[t._v("A huge thanks to everybody who contributed to this new release with suggestions, pull requests and bug reports.")]),t._v(" "),a("p",[t._v("Since the "),a("code",[t._v("v0.7.0")]),t._v(" release around a month ago, we've had "),a("code",[t._v("39")]),t._v(" new commits made by "),a("code",[t._v("6")]),t._v(" different contributors for a total of "),a("code",[t._v("1540")]),t._v(" additions and "),a("code",[t._v("1380")]),t._v(" deletions. Here's the "),a("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk/compare/v0.7.0...v0.8.0",target:"_blank",rel:"noopener noreferrer"}},[t._v("full diff"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("A special thanks to the new contributor for this release:")]),t._v(" "),a("ul",[a("li",[t._v("[@futurepaul][@futurepaul] - Paul Miller")])])])}),[],!1,null,null,null);s.default=n.exports}}]);