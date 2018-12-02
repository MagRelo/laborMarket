# Servésa

## Liquid Labor Market

Servésa is a marketplace designed to increase the transparency of the availability, pricing, and scheduling of labor. 

By creating a new type of employment contract we can reduce transaction costs and unlock new opportunities for profitable cooperation.

## Implementation

We'll create a unique token to represent each agent's unit of work. We'll then create financial incentives around how tokens are priced and redeemed to encourage long-term relationships between prinicipals and agents.

As this strategy focuses on reducing transaction costs we expect it will be most valuable when applied to areas where a) there is high transaction costs around finding and retaining labor, b) work is intermittent, and c) where the agents are somewhat interchangeable but difficult to directly compare (e.g., software developers).

## Example

1.  Alice is smart contract security specialist. She creates a profile on Servesa to advertise her availablity and to handle the billing for her services.

    _Behind the scenes, a smart contract is deployed that creates a unique, [non-fungible token](https://hackernoon.com/an-overview-of-non-fungible-tokens-5f140c32a70a) to represent Alice's work. Each token is sequential and the sequence number represents the order that Alice is expected to redeem them. If, for example, two token holders were both trying to schedule Alice for an upcoming project, Alice is expected to honor the earlier tokens first. There is no requirement to redeem the tokens in order – it simply acts as a signal to help Alice and the token holders coordinate scheduling (it is also in Alice's economic interest for her to honor the priority of the tokens – more on that later.)_

2.  Bob manages a team that is developing smart contracts and he knows that he'll eventually need a security audit. He'd like to find and retain a security expert ahead of time and also have them begin as soon as possible after each contract is ready but but he's not sure when all of the contracts will be finished.

    Bob finds Alice's Servesa profile and purchases 20 tokens (representing 20 hours of work) from Alice's Servesa profile.

    _The amount of ETH that Bob has to pay for each token depends on: a) the amount of ETH in the contract, and b) the number of outstanding tokens. See more about [bonded-curve curation markets](https://medium.com/@simondlr/tokens-2-0-curved-token-bonding-in-curation-markets-1764a2e0bee5|) ._

3.  Some months later Bob is ready to schedule Alice. He contacts her and finds out that her current engagement will be finished next week. Although Alice has dozens of companies holding her tokens, Bob's tokens are currently the highest priority so she informs him that she'll be ready to start as soon as her current engagement is finished.

4.  Alice completes the audit in 18 hours, and asks Bob to release 18 tokens to her for payment. Bob releases the tokens, and Alice sells them back to her contract in exchange for ETH.

    _The amount of ETH that Alice is able to claim depends on: a) the amount of ETH in the contract, and b) the number of outstanding tokens. See more about [bonded-curve curation markets](https://medium.com/@simondlr/tokens-2-0-curved-token-bonding-in-curation-markets-1764a2e0bee5|) ._

5.  Bob now has two remaining tokens, and several options on what to do with them. He can hold the tokens if he thinks he'll need Alice's services again in the future. He can also sell them back to the contract, essentially getting a refund for his unused tokens (and possibly a profit). Or he can sell the tokens to someone else (remember these tokens have a priority – someone else may be willing to pay a premium for that).

### Advantages for agents (Alice)

- **Higher rates:** The 'sell' price of the token will include both the base rate for their services as well as the premium that token-holders pay to hold early tokens (i.e., to hold their place in line).
- **More flexibility:** Alice can limit the number of tokens that she is willing to sell or redeem in a given period
- **Transparent Pricing:** Pricing is determined by verifiable signals of demand for Alice's services

### Advantages for pricipals (Bob)

- **Transparent Escrow:** Only pay for the time that you use: sell tokens back to the contract for a refund at any time
- **Speculative Hiring:** Find and retain employees before they are needed
- **Resell tokens:** Possibility of making a profit if the early tokens become more valuable

## Market Dynamics

### Incentive to hold tokens

Holding tokens has several advantages:
- Earlier tokens cost less but promise the same amount of labor (curved-bonding pricing)
- Earlier tokens have higher priority when scheduling services
- Earlier tokens have an opportunity for profit if/when the tokens are sold back to the contract or sold to a third-party

### Scheduling, and honoring the priority of tokens

From the point of view of the agent (Alice) it is smart to encourage pricipals to hold tokens because when tokens are sold back to the contract the token is exchanged for 1/n of the contract balance. Each token that is bought and held increase's the unit price of Alice's labor.

For a principal, holding tokens is a balance between 

is essentially holding your place in line and pricipals will not wait in a line that is not honored.

This same dynamic will apply to situations where there agent would prefer not to take the work. Pricipals always have the option to sell their tokens back to the contract for a refund, but this is not ideal for the agent in two ways: 1) the total contract balance is reduced which reduces the agents marginal rate, and 2) it acts as a signal to token holders and prospective token holders that there is uncertainty around the redemption of the token which will tend to depress the price.

### Market-tuning parameters

The following parameters can be used to shape market dynamics (these fees will be split between the agent contract and the Servésa platform.)

*   Transaction fees: each agent contract could choose to implement fees on each token transaction (i.e., 'buy', 'sell', and 'transfer') in order to reduce the velocity of the token. From the agent's perspective, this friction may be desirable in order to reduce speculation.

*   Demmurage: each agent contract could choose to implement a form of [demmurage](https://en.wikipedia.org/wiki/Demurrage_(currency)) to increase the cost of their holding tokens. From the agent's perspective, this friction may be desirable in order to limit the incentive for pricipals to purchase and sit on the agent's tokens.

## Other considerations

### Teams

The example above uses a single person (Alice) as an example of an agent but this construction will work even better for teams becuase of the inherent scarcity of 'priority' – if a sought-after group chooses to create a team they will multiply the effect of the priority tokens.

### Speculation

This could create an incentive for secondary markets to emerge by identifying and flipping under-priced services. This may be a positive feature of the system.
