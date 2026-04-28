import { Request, Response } from "express";
import prisma from "@database";

export const createCalcado = async (req: Request, res: Response) => {
    try {
            const {nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque} = req.body;

            if (!nome_produto || !cor || !marca || !tamanho || !preco || !quantidade_em_estoque) {
                return res.status(400).json({
                    message: "Todos os campos são obrigatórios."
                })
            }

            const newCalcado = await prisma.calcado.create({
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


export const deleteCalcado = async (req: Request, res: Response) => {
    
    try {
        const { id } = req.params;

        const deletedCalcado = await prisma.calcado.delete({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(deletedCalcado);
   } 
   catch (error) {
        return res.status(400).json({
            message: "Erro ao deletar calcado",
            error,
        })
    }
}


export const updateCalcado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nome_produto, cor, marca, tamanho, preco, quantidade_em_estoque } = req.body;
        const updatedCalcado = await prisma.calcado.update({
            where: {
                id: Number(id)
            },
            data: {
                nome_produto,
                cor,
                marca,
                tamanho,
                preco,
                quantidade_em_estoque
            }
        });
        return res.status(200).json(updatedCalcado);
    } 
    catch (error) {
        return res.status(400).json({
            message: "Erro ao atualizar calcado",
            error,
        })
    }
}

export const readAllCalcados = async (req: Request, res: Response) => {
    try {
        const calcados = await prisma.calcado.findMany();

        if (!calcados){
            return res.status(404).json({
                message: "Nenhum calcado criado ainda."
            })
        }
        return res.status(200).json(calcados);
    } 
    catch (error) {
        return res.status(400).json({
            message: "Erro ao buscar calcados",
            error,
        })
    }
}