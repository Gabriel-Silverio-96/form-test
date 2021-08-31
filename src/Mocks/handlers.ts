import { rest } from "msw";

export const handlers = [
    rest.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados", async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [
                    {
                        "id": 11,
                        "sigla": "RO",
                        "nome": "Rondônia",
                        "regiao": {
                            "id": 1,
                            "sigla": "N",
                            "nome": "Norte"
                        }
                    },
                    {
                        "id": 12,
                        "sigla": "AC",
                        "nome": "Acre",
                        "regiao": {
                            "id": 1,
                            "sigla": "N",
                            "nome": "Norte"
                        }
                    }
                ]
            )
        )
    }),
    rest.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/:uf/municipios", async (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [
                    {
                        "id": 1200013,
                        "nome": "Acrelândia",
                        "microrregiao": {
                            "id": 12004,
                            "nome": "Rio Branco",
                            "mesorregiao": {
                                "id": 1202,
                                "nome": "Vale do Acre",
                                "UF": {
                                    "id": 12,
                                    "sigla": "AC",
                                    "nome": "Acre",
                                    "regiao": {
                                        "id": 1,
                                        "sigla": "N",
                                        "nome": "Norte"
                                    }
                                }
                            }
                        },
                        "regiao-imediata": {
                            "id": 120001,
                            "nome": "Rio Branco",
                            "regiao-intermediaria": {
                                "id": 1201,
                                "nome": "Rio Branco",
                                "UF": {
                                    "id": 12,
                                    "sigla": "AC",
                                    "nome": "Acre",
                                    "regiao": {
                                        "id": 1,
                                        "sigla": "N",
                                        "nome": "Norte"
                                    }
                                }
                            }
                        }
                    },

                    {
                        "id": 1200054,
                        "nome": "Assis Brasil",
                        "microrregiao": {
                            "id": 12005,
                            "nome": "Brasiléia",
                            "mesorregiao": {
                                "id": 1202,
                                "nome": "Vale do Acre",
                                "UF": {
                                    "id": 12,
                                    "sigla": "AC",
                                    "nome": "Acre",
                                    "regiao": {
                                        "id": 1,
                                        "sigla": "N",
                                        "nome": "Norte"
                                    }
                                }
                            }
                        },
                        "regiao-imediata": {
                            "id": 120002,
                            "nome": "Brasiléia",
                            "regiao-intermediaria": {
                                "id": 1201,
                                "nome": "Rio Branco",
                                "UF": {
                                    "id": 12,
                                    "sigla": "AC",
                                    "nome": "Acre",
                                    "regiao": {
                                        "id": 1,
                                        "sigla": "N",
                                        "nome": "Norte"
                                    }
                                }
                            }
                        }
                    }
                ]
            )
        )
    }),
]