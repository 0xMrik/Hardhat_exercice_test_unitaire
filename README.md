# Voting Contract Test Suite

This is the test suite for the Voting.sol smart contract. It uses Hardhat and the Chai testing library.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npx hardhat test` to run the tests.
4. Run `REPORT_GAS=true npx hardhat test`to run the tests with ether-gas-report

## Functions Tested

The following functions of the Voting contract are tested:

- `addVoter`: Tests the registration of new voters.
    - Checks if the function correctly adds a new voter.
    - Checks if the function emits a VoterRegistered event when a new voter is registered.
    - Checks if the function reverts when trying to register a voter that is already registered.
- `getVoter`: Tests the retrieval of voter information.
    - Checks if the function correctly returns the information of a registered voter.
    - Checks if the function correctly returns the information of a voter who has voted.
    - Checks if the function reverts when trying to get information of a non-registered voter.
- `addProposal`: Tests the adding of new proposals.
    - Checks if the function correctly adds a new proposal.
    - Checks if the function emits a ProposalRegistered event when a new proposal is added.
    - Checks if the function reverts when a non-registered voter tries to add a proposal.
    - Checks if the function reverts when the contract is not in the ProposalsRegistrationStarted state.
- `getOneProposal`: Tests the retrieval of proposal information.
    - Checks if the function correctly returns the information of a proposal.
    - Checks if the function reverts when trying to get information of a non-existing proposal.
    - Checks if the function reverts when a non-registered voter tries to get a proposal.
- `setVote`: Tests the voting functionality.
    - Checks if the function correctly sets a vote for a proposal.
    - Checks if the function emits a Voted event when a vote is set.
    - Checks if the function reverts when a non-registered voter tries to vote.
    - Checks if the function reverts when trying to vote for a non-existing proposal.
    - Checks if the function reverts when a voter tries to vote more than once.
- `tallyVotes`: Tests the vote tallying functionality.
    - Checks if the function correctly calculates the winning proposal.
    - Checks if the function emits a WorkflowStatusChange event when votes are tallied.
    - Checks if the function reverts when a non-owner tries to tally votes.
    - Checks if the function reverts when the contract status is not VotingSessionEnded.
- `startProposalsRegistering`: Tests the start of the proposal registration phase.
    - Checks if the function correctly changes the contract status to ProposalsRegistrationStarted.
    - Checks if the function emits a WorkflowStatusChange event when the proposal registration phase starts.
    - Checks if the function reverts when a non-owner tries to start the proposal registration phase.
- `endProposalsRegistering`: Tests the end of the proposal registration phase.
    - Checks if the function correctly changes the contract status to ProposalsRegistrationEnded.
    - Checks if the function emits a WorkflowStatusChange event when the proposal registration phase ends.
    - Checks if the function reverts when a non-owner tries to end the proposal registration phase.
- `startVotingSession`: Tests the start of the voting session.
    - Checks if the function correctly changes the contract status to VotingSessionStarted.
    - Checks if the function emits a WorkflowStatusChange event when the voting session starts.
    - Checks if the function reverts when a non-owner tries to start the voting session.
    - Checks if the function reverts when the contract status is not ProposalsRegistrationEnded.
- `endVotingSession`: Tests the end of the voting session.
    - Checks if the function correctly changes the contract's state from VotingSessionStarted to VotingSessionEnded. 
    - Checks if the function reverts if the contract's state is not VotingSessionStarted when the function is called
    - Checks if the VotingSessionEnded event is emitted correctly.


## Test Coverage

The test suite has the following result : 

| File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
|-------------|---------|----------|---------|---------|-----------------|
| contracts/  | 100     | 89.29    | 100     | 100     |                 |
| Voting.sol  | 100     | 89.29    | 100     | 100     |                 |
| All files   | 100     | 89.29    | 100     | 100     |                 |


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
