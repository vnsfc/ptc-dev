import { Request, Response } from "express";
import prisma from "@database";

export const readAllUsers = async (req: Request, res: Response) => {
    try {

        const users = await prisma.user.findMany();

        if (!users){
            return res.status(404).json({
                message: "Nenhum usuário criado ainda."
            })
        }

        return res.status(200).json(users)

    } catch (error){
        return res.status(400).json({
            message: "Erro ao buscar usuários",
            error,
        })
    }
}


export const createCalcado = async (req: Request, res: Response) => {
    try {
            const {nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque} = req.body;

            if (!nome_produto || !cor || !marca || !tamanho || !preco || !quantidade_em_estoque) {
                return res.status(400).json({
                    message: "Todos os campos são obrigatórios."
                })
            }

            const newCalcado = await prisma.Calcado.create({
                data: {
                    nome_produto,
                    cor,
                    marca,
                    tamanho,
                    preco,
                    quantidade_em_estoque
                }
            });
        return res.status(201).json(newCalcado);
    } catch (error) {
        return res.status(400).json({
            message: "Erro ao criar calcado",
            error,
        })
    }
}