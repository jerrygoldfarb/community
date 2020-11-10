(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{EvwK:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("z1h2"),o={},r={_frontmatter:o},c=i.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Vaults Tutorial"),Object(l.b)("p",null,"A Vault is a tool that lets the owner deposit collateral and generate Dai."),Object(l.b)("h2",null,"Vault Types"),Object(l.b)("p",null,"Vaults are categorized by the type of collateral used to generated Dai. Users create Dai by generating it against their collateral and destroy Dai when repaying their generated Dai balance."),Object(l.b)("p",null,"The process of generating Dai happens entirely on-chain, which enables anyone to audit the amount of circulating Dai and the collateral backing it."),Object(l.b)("p",null,"For a current list of Collateral types and Vault types, please visit ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://oasis.app/borrow"}),"Oasis Borrow")," or try one of these ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#third-party-vault-portals"}),"other Maker Vault front-ends"),"."),Object(l.b)("h2",null,"Collateralization"),Object(l.b)("p",null,"Vaults are required to be overcollateralized and have a ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation Ratio")," that Vault owners need to uphold to avoid the Liquidation of their positions."),Object(l.b)("p",null,"Additionally, a Debt Ceiling is imposed on the Maker Protocol as well as each Vault type. The Debt Ceiling is the maximum amount of Dai that can be generated."),Object(l.b)("p",null,"The Global Debt Ceiling limits the amount of Dai that can be generated across the entire system, while Vault-specific Debt-Ceilings limit how much Dai each type of Vault can generate."),Object(l.b)("h2",null,"Stability Fees"),Object(l.b)("p",null,"The ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fee")," is a variable-rate fee continuously added to a Vault owner’s generated Dai balance."),Object(l.b)("h2",null,"Emergency Shutdown Module"),Object(l.b)("p",null,"The Emergency Shutdown Module(ESM) provides a process for shutting down the Maker Protocol and distributing collateral to Dai holders and Vault owners."),Object(l.b)("p",null,"To trigger an Emergency Shutdown, a minimum threshold of 50,000 MKR must be placed into the ESM. All MKR placed in the ESM can only be retrieved after redeployment as a decision of MKR governors."),Object(l.b)("p",null,Object(l.b)("img",Object.assign({parentName:"p"},{src:"https://i.imgur.com/QM63vjM.png",alt:"Emergency Shutdown Module"}))),Object(l.b)("p",null,"Activating an Emergency Shutdown:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Locks the System")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Freezes the Dai Savings Rate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Prohibits Vault Creation/Dai Generation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Freezes Reference Prices"))),Object(l.b)("p",null,"During an Emergency Shutdown, excess collateral is made available to Vault owners. Once collateral auctions are concluded, any remaining collateral in the Vaults is made available for redemption by Dai holders."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-learn-vaults-vaults-tutorial-mdx-f8e02939c5e16e21d287.js.map