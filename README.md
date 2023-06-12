# Voting Contract Test Suite

This is the test suite for the Voting smart contract. It uses Hardhat and the Chai testing library.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npx hardhat test` to run the tests.
4. Run `REPORT_GAS=true npx hardhat test`to run the tests with ether-gas-report

## Functions Tested

The following functions of the Voting contract are tested:

- `addVoter`: Tests the registration of new voters.
- `getVoter`: Tests the retrieval of voter information.
- `addProposal`: Tests the adding of new proposals.
- `getOneProposal`: Tests the retrieval of proposal information.
- `setVote`: Tests the voting functionality.
- `tallyVotes`: Tests the vote tallying functionality.
- `startProposalsRegistering`: Tests the start of the proposal registration phase.
- `endProposalsRegistering`: Tests the end of the proposal registration phase.
- `startVotingSession`: Tests the start of the voting session.
- `endVotingSession`: Tests the end of the voting session.

## Test Coverage

The test suite has the following result : 

- Statements: 100%
- Branches: 89.29%
- Functions: 100%
- Lines: 100%

the test ether-gas-report has the following result : 

| Contract | Method | Min | Max | Avg | # calls | eur (avg) |
|----------|--------|-----|-----|-----|---------|-----------|
| Voting   | addProposal | 59124 | 59148 | 59134 | 20 | - |
| Voting   | addVoter | 50208 | 50220 | 50219 | 57 | - |
| Voting   | endProposalsRegistering | - | - | 30599 | 23 | - |
| Voting   | endVotingSession | - | - | 30533 | 9 | - |
| Voting   | setVote | 58101 | 78013 | 65093 | 13 | - |
| Voting   | startProposalsRegistering | - | - | 94840 | 33 | - |
| Voting   | startVotingSession | - | - | 30554 | 18 | - |
| Voting   | tallyVotes | - | - | 63565 | 3 | - |
||||||||
| Deployments | - | - | 1970595 | 6.6 % | - |
| Voting | - | - | 1970595 | 6.6 % | - |
