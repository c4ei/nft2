# Open Store

# [Demo Video](https://www.youtube.com/watch?v=sHytyvUQB0Q)
# Tagline

Open Store is a NFT marketplace where traders can buy and sell NFT tokens through the usage of ethers and track the ownership of digital assets.

# Problem it Solves

* **Duplicate Asset Problem**: Duplication of digital assets is not possible due to non fungibility of NFT's.

* **No Tampering of Data**: No one can easily tamper the data as the data is stored on the blockchain. 

* **Quick Transactions from Polygon**: Polygon provided us with *quick transaction speed* which boosted the *User Experience* of our website.

* **Ownership Record Maintainance**: Ownership can be tracked easily as smart contract passes the ownership from the seller to buyer directly.

* **Data Storage problem of Blockchain**: Blockchain can't be used for storing media files for media assets in an efficient manner, so we used IPFS for digital assets. 

# Challenges Faced 

![](https://res.cloudinary.com/dnv3ztqf1/image/upload/v1632647684/devathon/1_hu7TeBZ7lX4BTzUVLIhQJQ_u0vhgp.png)


* **Learning New Technologies**: The entire team was unaware of the development technology behind NFT tokens. Consequently, the most difficult thing for us was to overcome the fear of learning a new technology such as blockchain. Thanks to **Polygon**, we were easily able to build NFT tokens. 
* **Integrating errors**: The integration of next.js backend and blockchain was one the challenges we faced.
* **CSS errors** : We invested a lot of time in developing the front end from scratch.
* **Technical Errors**: Many **Errors** while using blockchain emerged when we tried to merge the next.js with our backend.
* **Deploying error**:  Deploying was also one the challenges which we faced while building this project. 

### **Final System Design**

![](https://res.cloudinary.com/dnv3ztqf1/image/upload/v1632645360/devathon/design.jpg)


# Technologies Used

Polygon, IPFS, Next.js, Hardhat, Ethereum, Solidity, Metamask,HTML/CSS, BootStrap, JavaScript


npx hardhat compile

npx hardhat run --network mainnet scripts/deploy.js

npx hardhat run --network c4ei scripts/deploy.js

### "OpenStore Tokens", "OST"
dev@ubuntu:~/www/nft2$ npx hardhat run scripts/deploy.js
nftMarket deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3
nft deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

npx hardhat run --network c4ei scripts/deploy.js

dev@ubuntu:~/www/nft2$ npx hardhat run --network c4ei scripts/deploy.js
nftMarket deployed to: 0x365Bb16C0aCD522a138615398F9dea601660242d
nft deployed to: 0x7859923aeF4263462dE5363497F43D89158A6Cb0
