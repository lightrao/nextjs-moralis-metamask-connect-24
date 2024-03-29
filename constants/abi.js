module.exports = {
  abi: [
    {
      type: "function",
      name: "addPerson",
      inputs: [
        { name: "_name", type: "string", internalType: "string" },
        {
          name: "_favoriteNumber",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "listOfPeople",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "favoriteNumber",
          type: "uint256",
          internalType: "uint256",
        },
        { name: "name", type: "string", internalType: "string" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "nameToFavoriteNumber",
      inputs: [{ name: "", type: "string", internalType: "string" }],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "retrieve",
      inputs: [],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "store",
      inputs: [
        {
          name: "_favoriteNumber",
          type: "uint256",
          internalType: "uint256",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
  ],
};
