import { NextFunction, Request, Response } from "express";


export const mainController = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts');
        const resResponse = await result.json();
        return res.send(resResponse);
        
    } catch (error) {
        console.error('Error');
    }
}