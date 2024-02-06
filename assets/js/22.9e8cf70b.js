(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{365:function(t,e,s){"use strict";s.r(e);var a=s(7),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"2-of-3-multi-signature-descriptor-wallet-using-bdk-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#2-of-3-multi-signature-descriptor-wallet-using-bdk-cli"}},[t._v("#")]),t._v(" 2-of-3 Multi-Signature Descriptor Wallet using bdk-cli")]),t._v(" "),e("h2",{attrs:{id:"overview-of-the-tutorial"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-the-tutorial"}},[t._v("#")]),t._v(" Overview of the tutorial")]),t._v(" "),e("ul",[e("li",[t._v("The purpose of this tutorial is to continue learning "),e("code",[t._v("bdk-cli")]),t._v(" as our tool to manage a 2 of 3 multi-signature wallet.")]),t._v(" "),e("li",[t._v("Generate a receive address with a spending Policy of 2 out of 3 escrow aka multi-signature.")]),t._v(" "),e("li",[t._v("Intro to more complex but standard policies to create custom encumberances aka custom spending conditions for transactions.")])]),t._v(" "),e("p",[t._v("Note that to complete this tutorial, you'll need to enable the "),e("code",[t._v("compiler")]),t._v(" and "),e("code",[t._v("electrum")]),t._v(" flags when installing or building bdk-cli, for example by installing using:")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cargo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" bdk-cli "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--features")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("compiler,electrum\n")])])]),e("h2",{attrs:{id:"step-1-generate-the-xprvs-extended-keys-and-save-to-environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-generate-the-xprvs-extended-keys-and-save-to-environment-variables"}},[t._v("#")]),t._v(" Step 1: Generate the XPRVs (Extended-Keys) and Save to environment variables")]),t._v(" "),e("blockquote",[e("p",[t._v("Create three private keys and each in their own environment variable")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("export XPRV_00=$(bdk-cli key generate | jq -r '.xprv')")])]),t._v(" "),e("p",[t._v("▶️   "),e("code",[t._v("export XPRV_01=$(bdk-cli key generate | jq -r '.xprv')")])]),t._v(" "),e("p",[t._v("▶️   "),e("code",[t._v("export XPRV_02=$(bdk-cli key generate | jq -r '.xprv')")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/FwgUdwK.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"1a-verify-xprv-environment-variables-are-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1a-verify-xprv-environment-variables-are-active"}},[t._v("#")]),t._v(" 1a: Verify XPRV environment variables are Active")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("env | grep XPRV")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/ZerGPbO.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-2-generate-xpubs-extended-public-keys-save-to-environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-generate-xpubs-extended-public-keys-save-to-environment-variables"}},[t._v("#")]),t._v(" Step 2: Generate XPUBs (Extended Public Keys) & Save to environment variables")]),t._v(" "),e("blockquote",[e("p",[t._v("Generate the three individual Public Keys aka XPUBs using our Private key and descriptor path.")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export XPUB_00=$(bdk-cli key derive --xprv $XPRV_00 --path "m/84\'/1\'/0\'/0" | jq -r ".xpub")')])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export XPUB_01=$(bdk-cli key derive --xprv $XPRV_01 --path "m/84\'/1\'/0\'/0" | jq -r ".xpub")')])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export XPUB_02=$(bdk-cli key derive --xprv $XPRV_02 --path "m/84\'/1\'/0\'/0" | jq -r ".xpub")')])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/xT3KRh4.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"2a-verify-xpub-environment-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#2a-verify-xpub-environment-variables"}},[t._v("#")]),t._v(" 2a: Verify XPUB environment variables")]),t._v(" "),e("p",[t._v("▶️    "),e("code",[t._v("env | grep XPUB")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/SzAip9E.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-3-create-single-wallet-descriptors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-create-single-wallet-descriptors"}},[t._v("#")]),t._v(" Step 3: Create Single-Wallet Descriptors")]),t._v(" "),e("blockquote",[e("p",[t._v("Create the wallet Descriptor for each wallet")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export DESCRIPTOR_00="$XPRV_00/84h/1h/0h/0/*"')])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export DESCRIPTOR_01="$XPRV_01/84h/1h/0h/0/*"')])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export DESCRIPTOR_02="$XPRV_02/84h/1h/0h/0/*"')])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/mFrWt6b.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-4-create-multi-sig-descriptor-wallets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-4-create-multi-sig-descriptor-wallets"}},[t._v("#")]),t._v(" Step 4: Create Multi-Sig-Descriptor Wallets")]),t._v(" "),e("blockquote",[e("p",[t._v("This is how you create the 2-of-3 multi-sig output descriptor. You will need (one PrivateKey and two Xpubs) It consists of using the "),e("code",[t._v("compiler")]),t._v(" function to parse "),e("code",[t._v("policy")]),t._v(" to "),e("code",[t._v("mini-script")]),t._v(" .")])]),t._v(" "),e("ul",[e("li",[t._v("When creating the descriptor the order matters so be aware of that when following tutorial if you are for any reason changing the order of the policy.")])]),t._v(" "),e("h4",{attrs:{id:"multi-sig-wallet-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-sig-wallet-0"}},[t._v("#")]),t._v(" Multi-Sig-Wallet 0")]),t._v(" "),e("ul",[e("li",[t._v("[ ] ▶️ "),e("code",[t._v("export MULTI_DESCRIPTOR_00=$(bdk-cli compile \"thresh(2,pk($DESCRIPTOR_00),pk($XPUB_01),pk($XPUB_02))\" | jq -r '.descriptor')")])])]),t._v(" "),e("h4",{attrs:{id:"multi-sig-wallet-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-sig-wallet-1"}},[t._v("#")]),t._v(" Multi-Sig-Wallet 1")]),t._v(" "),e("ul",[e("li",[t._v("[ ] ▶️ "),e("code",[t._v("export MULTI_DESCRIPTOR_01=$(bdk-cli compile \"thresh(2,pk($XPUB_00),pk($DESCRIPTOR_01),pk($XPUB_02))\" | jq -r '.descriptor')")])])]),t._v(" "),e("h4",{attrs:{id:"multi-sig-wallet-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-sig-wallet-2"}},[t._v("#")]),t._v(" Multi-Sig-Wallet 2")]),t._v(" "),e("ul",[e("li",[t._v("[ ] ▶️  "),e("code",[t._v("export MULTI_DESCRIPTOR_02=$(bdk-cli compile \"thresh(2,pk($XPUB_00),pk($XPUB_01),pk($DESCRIPTOR_02))\" | jq -r '.descriptor')")])])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/Yb8RmFS.gif",alt:""}})]),t._v(" "),e("h4",{attrs:{id:"multi-sig-2-of-3-policy-gets-compiled-to-miniscript"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-sig-2-of-3-policy-gets-compiled-to-miniscript"}},[t._v("#")]),t._v(" multi-sig 2 of 3 policy gets compiled to miniscript")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# policy")]),t._v("\nthresh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",pk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XPRV_A"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",pk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XPUB_B"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",pk"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("XPUB_C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# miniscript")]),t._v("\nwsh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("multi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",XPRV_KEY,PUBKEY_B,XPUB_C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v("\n")])])]),e("hr"),t._v(" "),e("h3",{attrs:{id:"4a-verify-multi-sig-descriptor-environment-variables-are-active"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#4a-verify-multi-sig-descriptor-environment-variables-are-active"}},[t._v("#")]),t._v(" 4a: Verify Multi-Sig-Descriptor environment variables are active")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("env | grep MULTI")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/aAgtlsi.gif",alt:""}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"step-5-generate-receive-address-by-using-multi-sig-descriptor-wallets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-5-generate-receive-address-by-using-multi-sig-descriptor-wallets"}},[t._v("#")]),t._v(" Step 5: Generate Receive Address by using Multi-Sig-Descriptor Wallets")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 get_new_address")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd01 --descriptor $MULTI_DESCRIPTOR_01 get_new_address")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd02 --descriptor $MULTI_DESCRIPTOR_02 get_new_address")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/w1fxPSn.gif",alt:""}})]),t._v(" "),e("p",[t._v("🔴 Did you generate the same address for all three? Good! Else, something might be incorrect.")]),t._v(" "),e("h2",{attrs:{id:"step-6-send-testnet-bitcoin-to-the-newly-created-receive-address"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-6-send-testnet-bitcoin-to-the-newly-created-receive-address"}},[t._v("#")]),t._v(" Step 6: Send Testnet Bitcoin to the newly created receive-address")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://testnet-faucet.mempool.co",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Testnet Faucet link:1"),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://bitcoinfaucet.uo1.net",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bitcoin Testnet Faucet link:2"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"step-7-sync-one-of-the-multi-sig-wallets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-7-sync-one-of-the-multi-sig-wallets"}},[t._v("#")]),t._v(" Step 7: Sync one of the Multi-Sig Wallets")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 sync")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/GuefgeI.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-8-check-balance-multi-sig-wallets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-8-check-balance-multi-sig-wallets"}},[t._v("#")]),t._v(" Step 8: Check Balance Multi-Sig Wallets")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 get_balance")])]),t._v(" "),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/zNciCqF.gif",alt:""}})]),t._v(" "),e("ul",[e("li",[t._v("Every wallet has access to sync and view balance.")])]),t._v(" "),e("h2",{attrs:{id:"step-9-check-multi-sig-policies-on-descriptor-wallet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-9-check-multi-sig-policies-on-descriptor-wallet"}},[t._v("#")]),t._v(" Step 9: Check Multi-Sig Policies on Descriptor Wallet")]),t._v(" "),e("p",[t._v("▶️"),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 policies")])]),t._v(" "),e("p",[t._v("The output below confirms the command was successful.")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"external"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"contribution"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conditions"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sorted"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PARTIAL"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"seaxtqqn"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keys"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fingerprint"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"7cdf2d46"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fingerprint"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fc7870cd"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fingerprint"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"26b03333"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"satisfaction"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(",\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sorted"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" false,\n      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PARTIAL"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"threshold"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MULTISIG"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"internal"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" null\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")])])]),e("h3",{attrs:{id:"spendingpolicyrequired-for-complex-descriptors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spendingpolicyrequired-for-complex-descriptors"}},[t._v("#")]),t._v(" SpendingPolicyRequired for complex descriptors")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--external_policy")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("seaxtqqn"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': [0,1]}"')]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("-rootnode-"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("children "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#0 and #1 of root node>")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Save the \"id\": We will need to use this ''id'' later.")])]),t._v(" "),e("p",[t._v("More info on "),e("a",{attrs:{href:"https://bitcoindevkit.org/bdk-cli/interface/",target:"_blank",rel:"noopener noreferrer"}},[t._v("external policies here"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"step-10-create-a-transaction-psbt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-10-create-a-transaction-psbt"}},[t._v("#")]),t._v(" Step 10: Create a Transaction (PSBT)")]),t._v(" "),e("ul",[e("li",[t._v("1st Create a PSBT using the first wallet")]),t._v(" "),e("li",[t._v("2nd Sign the PSBT with the first wallet")]),t._v(" "),e("li",[t._v("3rd  Sign PSBT with the second wallet")]),t._v(" "),e("li",[t._v("Broadcast PSBT")])]),t._v(" "),e("h3",{attrs:{id:"export-unsigned-psbt-to-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#export-unsigned-psbt-to-environment-variable"}},[t._v("#")]),t._v(" Export UNSIGNED_PSBT to environment variable")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v('export UNSIGNED_PSBT=$(bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 create_tx --send_all --to mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt:0 --external_policy "{\\"CHANGE_ID_HERE\\": [0,1]}" | jq -r \'.psbt\')')])]),t._v(" "),e("h3",{attrs:{id:"verify-unsigned-psbt-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-unsigned-psbt-environment-variable"}},[t._v("#")]),t._v(" Verify UNSIGNED_PSBT  environment variable")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("env | grep UNSIGNED")]),t._v(" "),e("img",{attrs:{src:"https://i.imgur.com/djHaRDq.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-11-sign-the-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-11-sign-the-transaction"}},[t._v("#")]),t._v(" Step 11: SIGN the Transaction")]),t._v(" "),e("h3",{attrs:{id:"1st-wallet-signs-the-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#1st-wallet-signs-the-transaction"}},[t._v("#")]),t._v(" 1st Wallet Signs the transaction")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 sign --psbt $UNSIGNED_PSBT")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("export ONESIG_PSBT=$(bdk-cli wallet --wallet wallet_name_msd00 --descriptor $MULTI_DESCRIPTOR_00 sign --psbt $UNSIGNED_PSBT | jq -r '.psbt')")])]),t._v(" "),e("p",[t._v("▶️"),e("code",[t._v("env | grep ONESIG")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "is_finalized": false,\n  "psbt": "cHNidP8BAFUBAAAAAdYCtva/7Rkt+fgFu3mxAdaPh4uTbgBL3HmYZgcEKWygAAAAAAD/////AQqGAQAAAAAAGXapFDRKD0jKFQ7CuQOBdmC5tosTpnAmiKwAAAAAAAEA6gIAAAAAAQFLyGFJFK884DGBM1WgskRZ6gKp/7oZ+Z30u0+wF3pZYAEAAAAA/v///wKghgEAAAAAACIAINHcOQLE6GpJ3J+FOzn/be+HApxW8sZtGqfA3TBW+NYX91hoOAAAAAAWABTPQDZx2wYYIn+ug2pZBmWBn0Tu/gJHMEQCIHu6GmRMDgPZyTx+klFMA9VujR3qDA/Y08kSkRvOaChjAiBAtExtGAYLuQ/DDJzCqLlNZ1bMB3MV+nxsLfTdI9YcYwEhA0b8lz+kt0xHfR/tjUKOc2Nt2L61pDd5vJ/lsKi8pw9MmFUjAAEBK6CGAQAAAAAAIgAg0dw5AsToakncn4U7Of9t74cCnFbyxm0ap8DdMFb41hciAgIjUCIdnyr6rDtuNhVNt4ZBDcvYLawfoJbzbPyxc/WNDUgwRQIhAJdILr7G3UzYylyr2fA13MFsz/jG4+iZlKeEkX79d082AiA99UF0/uFyXBVNUmuGaxdHL7wlhzqfbgGLMREN0z/O6QEBBWlSIQIjUCIdnyr6rDtuNhVNt4ZBDcvYLawfoJbzbPyxc/WNDSEDzsDXexRPSxeXiLJoS0i2fQlOoOGHmo+Dhaeaq3oHV6YhAjGKA2Dqg+QeMICBAifYslQF2WrehLEQ0iEOpp/+eQ0NU64iBgIjUCIdnyr6rDtuNhVNt4ZBDcvYLawfoJbzbPyxc/WNDRh83y1GVAAAgAEAAIAAAACAAAAAAAAAAAAiBgIxigNg6oPkHjCAgQIn2LJUBdlq3oSxENIhDqaf/nkNDRgmsDMzVAAAgAEAAIAAAACAAAAAAAAAAAAiBgPOwNd7FE9LF5eIsmhLSLZ9CU6g4Yeaj4OFp5qregdXphj8eHDNVAAAgAEAAIAAAACAAAAAAAAAAAAAAA=="\n}\n')])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/0w4sK5y.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"2nd-wallet-signs-the-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#2nd-wallet-signs-the-transaction"}},[t._v("#")]),t._v(" 2nd Wallet Signs the transaction")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd01 --descriptor $MULTI_DESCRIPTOR_01 sign --psbt $ONESIG_PSBT")])]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("export SECONDSIG_PSBT=$(bdk-cli wallet --wallet wallet_name_msd01 --descriptor $MULTI_DESCRIPTOR_01 sign --psbt $ONESIG_PSBT | jq -r '.psbt')")])]),t._v(" "),e("p",[t._v("▶️"),e("code",[t._v("env | grep SECONDSIG")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "is_finalized": true,\n  "psbt": "cHNidP8BAFUBAAAAAdYCtva/7Rkt+fgFu3mxAdaPh4uTbgBL3HmYZgcEKWygAAAAAAD/////AQqGAQAAAAAAGXapFDRKD0jKFQ7CuQOBdmC5tosTpnAmiKwAAAAAAAEA6gIAAAAAAQFLyGFJFK884DGBM1WgskRZ6gKp/7oZ+Z30u0+wF3pZYAEAAAAA/v///wKghgEAAAAAACIAINHcOQLE6GpJ3J+FOzn/be+HApxW8sZtGqfA3TBW+NYX91hoOAAAAAAWABTPQDZx2wYYIn+ug2pZBmWBn0Tu/gJHMEQCIHu6GmRMDgPZyTx+klFMA9VujR3qDA/Y08kSkRvOaChjAiBAtExtGAYLuQ/DDJzCqLlNZ1bMB3MV+nxsLfTdI9YcYwEhA0b8lz+kt0xHfR/tjUKOc2Nt2L61pDd5vJ/lsKi8pw9MmFUjAAEBK6CGAQAAAAAAIgAg0dw5AsToakncn4U7Of9t74cCnFbyxm0ap8DdMFb41hciAgIjUCIdnyr6rDtuNhVNt4ZBDcvYLawfoJbzbPyxc/WNDUgwRQIhAJdILr7G3UzYylyr2fA13MFsz/jG4+iZlKeEkX79d082AiA99UF0/uFyXBVNUmuGaxdHL7wlhzqfbgGLMREN0z/O6QEiAgPOwNd7FE9LF5eIsmhLSLZ9CU6g4Yeaj4OFp5qregdXpkgwRQIhAO2aRERcublhAzToshkZRMg2I8GaE7mM2ECr0vYyuscmAiB5KK4ETlvrLqL0QbcRbGqrSwIa9lVuOqP3f5qCnGRMaQEBBWlSIQIjUCIdnyr6rDtuNhVNt4ZBDcvYLawfoJbzbPyxc/WNDSEDzsDXexRPSxeXiLJoS0i2fQlOoOGHmo+Dhaeaq3oHV6YhAjGKA2Dqg+QeMICBAifYslQF2WrehLEQ0iEOpp/+eQ0NU64iBgIjUCIdnyr6rDtuNhVNt4ZBDcvYLawfoJbzbPyxc/WNDRh83y1GVAAAgAEAAIAAAACAAAAAAAAAAAAiBgIxigNg6oPkHjCAgQIn2LJUBdlq3oSxENIhDqaf/nkNDRgmsDMzVAAAgAEAAIAAAACAAAAAAAAAAAAiBgPOwNd7FE9LF5eIsmhLSLZ9CU6g4Yeaj4OFp5qregdXphj8eHDNVAAAgAEAAIAAAACAAAAAAAAAAAABBwABCP3+AAQASDBFAiEAl0guvsbdTNjKXKvZ8DXcwWzP+Mbj6JmUp4SRfv13TzYCID31QXT+4XJcFU1Sa4ZrF0cvvCWHOp9uAYsxEQ3TP87pAUgwRQIhAO2aRERcublhAzToshkZRMg2I8GaE7mM2ECr0vYyuscmAiB5KK4ETlvrLqL0QbcRbGqrSwIa9lVuOqP3f5qCnGRMaQFpUiECI1AiHZ8q+qw7bjYVTbeGQQ3L2C2sH6CW82z8sXP1jQ0hA87A13sUT0sXl4iyaEtItn0JTqDhh5qPg4Wnmqt6B1emIQIxigNg6oPkHjCAgQIn2LJUBdlq3oSxENIhDqaf/nkNDVOuAAA="\n}\n')])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/OdLHnJ3.gif",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"step-12-broadcast-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-12-broadcast-transaction"}},[t._v("#")]),t._v(" Step 12: Broadcast Transaction")]),t._v(" "),e("p",[t._v("▶️ "),e("code",[t._v("bdk-cli wallet --wallet wallet_name_msd01 --descriptor $MULTI_DESCRIPTOR_01 broadcast --psbt $SECONDSIG_PSBT")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "txid": "61da2451874a483aa8d1d0787c7680d157639f284840de8885098cac43f6cc2f"\n}\n')])])]),e("figure",[e("img",{attrs:{src:"https://i.imgur.com/M7s0Fd6.gif",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"verify-transaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-transaction"}},[t._v("#")]),t._v(" Verify Transaction")]),t._v(" "),e("p",[t._v("Verify transcation in the memory pool on testnet "),e("a",{attrs:{href:"https://mempool.space/testnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mempool-testnet!"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);