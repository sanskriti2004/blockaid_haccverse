// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BlockAid {
    struct Campaign {
        address creator;
        string title;
        string description;
        uint256 goal;
        uint256 amountCollected;
        bool isCompleted;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignCount;

    event CampaignCreated(uint256 indexed campaignId, address indexed creator, string title, uint256 goal);
    event DonationReceived(uint256 indexed campaignId, address indexed donor, uint256 amount);
    event CampaignCompleted(uint256 indexed campaignId);

    function createCampaign(string memory _title, string memory _description, uint256 _goal) external {
        require(_goal > 0, "Goal must be greater than zero");

        campaigns[campaignCount] = Campaign({
            creator: msg.sender,
            title: _title,
            description: _description,
            goal: _goal,
            amountCollected: 0,
            isCompleted: false
        });

        emit CampaignCreated(campaignCount, msg.sender, _title, _goal);
        campaignCount++;
    }

    function donate(uint256 _campaignId) external payable {
        require(_campaignId < campaignCount, "Campaign does not exist");
        require(msg.value > 0, "Donation amount must be greater than zero");

        Campaign storage campaign = campaigns[_campaignId];
        require(!campaign.isCompleted, "Campaign is already completed");

        campaign.amountCollected += msg.value;
        emit DonationReceived(_campaignId, msg.sender, msg.value);
    }

    function completeCampaign(uint256 _campaignId) external {
        require(_campaignId < campaignCount, "Campaign does not exist");

        Campaign storage campaign = campaigns[_campaignId];
        require(msg.sender == campaign.creator, "Only the creator can complete the campaign");
        require(!campaign.isCompleted, "Campaign is already completed");
        require(campaign.amountCollected >= campaign.goal, "Funding goal not reached");

        campaign.isCompleted = true;
        payable(campaign.creator).transfer(campaign.amountCollected);

        emit CampaignCompleted(_campaignId);
    }
}