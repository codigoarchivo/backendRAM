import { Request, Response } from "express";
import axios from "axios";
import { listTrickandmorty } from "../models/graphQL/queries";
const graphql = require("graphql");

const { print } = graphql;

export const postTrickandmorty = async (req: Request, res: Response) => {
  let page = req.query.page;


  try {

    const { data } = await axios({
      url: process.env.API_URL?.toString(),
      method: req.method,
      data: {
        query: print(listTrickandmorty),
        headers: { "Content-Type": "application/graphql" },
        variables: {
          page: Number(page),
          species: "human",
        },
      },
    });

    res.json(data);

  } catch (error) {
    res.status(500).json({ msg: "Bad request" });
  }
};
