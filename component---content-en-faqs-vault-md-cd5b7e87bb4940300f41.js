(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"slS/":function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return b}));var i=t("zLVn"),n=(t("q1tI"),t("7ljp")),o=t("z1h2"),r={},s=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",a)}},l=s("StatusBanner"),c=s("Button"),h={_frontmatter:r},u=o.a;function b(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(n.b)(u,Object.assign({},h,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)(l,{sticky:!0,mdxType:"StatusBanner"},Object(n.b)("p",null,"These are legacy guides and will not be maintened. You may be looking for the page on ",Object(n.b)(c,{secondary:!0,inline:!0,to:"/learn/vaults/",mdxType:"Button"},"Vaults"))),Object(n.b)("h1",{id:"vaults"},"Vaults"),Object(n.b)("h2",{id:"what-are-maker-vaults"},"What are Maker Vaults?"),Object(n.b)("p",null,"The Maker Vault is a core component of the Maker Protocol, which facilitates the generation of Dai against locked up Collateral."),Object(n.b)("p",null,"Vault usage collectively alters the total supply of Dai. Users create Dai by generating it against their Collateral and in-turn destroy Dai when repaying their generated Dai balance. This process happens on-chain, which enables full auditability of circulating Dai and the Collateral backing it."),Object(n.b)("p",null,"Vaults are required to be overcollateralized and have a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/#what-is-the-liquidation-ratio"}),"Liquidation Ratio")," that Vault owners need to uphold to avoid the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation")," of their positions. Additionally, a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"#what-is-a-debt-ceiling"}),"Debt Ceiling")," is imposed globally on the Maker Protocol, as well as individually on each Vault type."),Object(n.b)("h2",{id:"how-does-a-vault-work"},"How does a Vault work?"),Object(n.b)("p",null,"Any user who wishes to generate Dai may deposit Collateral into a Vault and do so, paying a Stability Fee on the generated Dai balance."),Object(n.b)("p",null,"Vault users are free to generate or pay back Dai and can add or withdraw Collateral with no time-constraints. As long as Vault owners maintain a minimum ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"#what-is-the-collateralization-ratio"}),"Collateralization Ratio"),", specified for each Vault type as the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/#what-is-the-liquidation-ratio"}),"Liquidation Ratio"),", they may interact with their Vaults freely. If a Vault’s Liquidation Ratio is breached, the position gets Liquidated. To read more about Liquidation, visit the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation FAQ"),". If a user wishes to reclaim the full amount of their Collateral, they will need to pay the full amount of Generated Dai back along with the Stability Fees owed."),Object(n.b)("h2",{id:"what-is-a-debt-ceiling"},"What is a Debt Ceiling?"),Object(n.b)("p",null,"In the Maker Protocol, a Debt Ceiling is the maximum amount of Dai that can be generated. There are two types of Debt Ceilings. One is a ",Object(n.b)("inlineCode",{parentName:"p"},"Global Debt Ceiling")," which limits the amount of Dai that can be generated across the entire system. The other is a Vault-specific ",Object(n.b)("inlineCode",{parentName:"p"},"Debt-Ceiling")," that limits how much Dai each Vault type can generate."),Object(n.b)("h2",{id:"are-there-different-types-of-vaults"},"Are there different types of Vaults?"),Object(n.b)("p",null,"Yes. Each Collateral type may have multiple Vault types."),Object(n.b)("h2",{id:"what-kind-of-collateral-can-i-use"},"What kind of Collateral can I use?"),Object(n.b)("p",null,"In Multi-Collateral Dai, accepted Collateral types are determined by MKR token holders through the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/governance/"}),"MakerDAO governance process.")," For a current list of Collateral types and Vault types, visit ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://oasis.app/borrow"}),"Oasis Borrow")," or other ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#third-party-vault-portals"}),"Maker Vault front-ends"),"."),Object(n.b)("h2",{id:"who-can-open-a-vault"},"Who can open a Vault?"),Object(n.b)("p",null,"This depends on the type of Vault. While some Vault types are permissionless others may carry requirements. Typically there are no requirements related to prior borrowing history or cumbersome application processes since Vaults are configured according to the risk profile of the underlying Collateral that is being used. Vaults are owned by the Ethereum addresses that create them and can be transferred between wallets freely."),Object(n.b)("h2",{id:"are-there-fees-for-using-a-vault"},"Are there fees for using a Vault?"),Object(n.b)("p",null,"Yes. Vault owners are required to pay a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/governance/stability-fees/"}),"Stability Fee")," on their generated Dai. The rate is expressed as an APR that compounds annually in practice. However, technically speaking, the fees are continuously compounding at a growth rate of x% per year. To learn more about how rate accumulation works visit this ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation"}),"documentation on rates"),"."),Object(n.b)("p",null,"If a Vault becomes undercollateralized, as specified by each Vault type’s ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/#what-is-the-liquidation-ratio"}),"Liquidation Ratio"),", it can be liquidated and have its assets automatically sold to cover the generated Dai. If a Vault is liquidated, a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/#what-is-the-liquidation-penalty"}),"Liquidation Penalty")," is applied to the Generated Dai balance."),Object(n.b)("p",null,"The Stability Fee and Liquidation Penalty vary according to the Vault type."),Object(n.b)("h2",{id:"what-is-the-collateralization-ratio"},"What is the Collateralization Ratio?"),Object(n.b)("p",null,"The Collateralization Ratio is the ratio between the value of the collateral and the value of the Generated Dai on a given Vault."),Object(n.b)("p",null,"For example: Let's say the ETH locked in a user’s Vault is worth $150 and 50 Dai was generated. This means the Collateralization Ratio is 300%. For each 1 Dai, there is $3 worth of collateral value backing it. In the Maker Protocol, your Vault may be liquidated if it falls below the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/#what-is-the-liquidation-ratio"}),"Liquidation Ratio"),", which is the minimum Collateralization Ratio. The Liquidation Ratio varies by Vault type."),Object(n.b)("h2",{id:"what-risks-are-associated-with-owning-a-vault"},"What risks are associated with owning a Vault?"),Object(n.b)("p",null,"Owning a Vault is inherently risky. There are four major categories of risks to consider when creating a Vault: Market Risks, User Risks, Systemic Risks, and Parameter Variability Risk."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Market Risks:")," Using a Vault involves generating Dai and transferring ownership of your assets to a smart-contract that can sell your assets in the event of a market downturn. Any Vault with Generated Dai has a Liquidation Price, the price of the underlying asset at which one's Vault would be liquidated. Using a Vault for leverage introduces additional risk. The potential for reward is higher through leverage, but the potential for loss is magnified as well. It is a common practice among users to maintain a high Collateralization Ratio to protect from Market Risks and thereby Liquidation."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"User Risks:")," These are risks associated with user errors. MakerDAO does not possess the ability to reverse any transactions or recover funds sent to incorrect addresses or contracts."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Systemic Risks:")," There are many potential risks facing the successful and continued operation of the Maker Protocol. The following non-exhaustive list highlights some of these risks:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A malicious hacking attack against the smart-contract infrastructure."),Object(n.b)("li",{parentName:"ul"},"A Black Swan event in one or more Collateral assets."),Object(n.b)("li",{parentName:"ul"},"Failure of centralized infrastructure. E.g., failed internet connections, MetaMask bugs, etc."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Parameter Variability Risk:")," It's important to note that Vault owners are subject to changes in the Risk Parameters that govern the system. This equates to financial risk for the Vault owner. Below is a partial list of parameters that are subject to change:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"/learn/governance/stability-fees/"}),"Stability Fee")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#what-is-a-debt-ceiling"}),"Debt Ceiling")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"/learn/vaults/liquidation/#what-is-the-liquidation-penalty"}),"Liquidation Penalty"))))),Object(n.b)("h2",{id:"what-are-common-practices-to-limit-risk"},"What are Common Practices to limit risk?"),Object(n.b)("p",null,"Market risks can be mitigated by using price alerts, maintaining a higher ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"#what-is-the-collateralization-ratio"}),"Collateralization Ratio"),", monitoring the health of your Vault regularly, and keeping enough reserves outside of your Vault to payback Generated Dai or to add to your deposited collateral. Many people can find themselves over-extended or may find they tend to make risky bets on market movements. This can lead to the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation")," of their Vaults resulting in financial loss."),Object(n.b)("p",null,"User risks can be mitigated by using small test amounts beforehand, and by thoroughly checking which addresses one is interacting with."),Object(n.b)("h2",{id:"how-would-a-flash-crash-on-a-single-exchange-affect-the-liquidation-of-vaults"},"How would a flash crash on a single exchange affect the Liquidation of Vaults?"),Object(n.b)("p",null,"A flash crash on a single exchange will not affect the system as each Oracle aggregates prices from many sources and uses a median for reference prices. Using a median naturally filters out broken prices, as a price from an exchange that has experienced a flash crash. You can read more about the Maker Protocol’s Oracle System in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"/learn/Oracles/"}),"Oracle FAQ"),"."),Object(n.b)("h2",{id:"where-can-i-view-live-information-about-liquidations"},"Where can I view live information about Liquidations?"),Object(n.b)("p",null,"Liquidations occur on-chain, so anyone can pull the data themselves. Several MakerDAO analytics dashboards already exist. You can see a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#watch-dai"}),"list of them")," in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com"}),"Awesome-MakerDAO")," resource repository."),Object(n.b)("h2",{id:"where-can-i-find-more-technical-information-about-vaults"},"Where can I find more technical information about Vaults?"),Object(n.b)("p",null,"Visit our ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol. Technical documentation about Vaults Fee can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation"}),"Jug - Detailed Documentation")," subsection of our Documentation Portal. Documentation about how Rates work in the Maker Protocol can be found in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/rates-module"}),"Rates Module")," section of our Documentation Portal."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-faqs-vault-md-cd5b7e87bb4940300f41.js.map