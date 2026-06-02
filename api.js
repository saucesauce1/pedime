import axios from "axios";
import Papa from "papaparse";

export default {
    list: async () =>
        axios
            .get(
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vQffDYHeQErx-QOhptiFt2tVFCksWO98KDSBNmwf9ESrLVOsy3OOX8Z-uZve8Opbm3NhtiEpyxdJyeC/pub?gid=0&single=true&output=csv",
                {
                    responseType: "blob",
                }
            )
            .then(
                response =>
                    new Promise((resolve, reject) => {
                        Papa.parse(response.data, {
                            header: true,
                            complete: results =>
                                resolve(
                                    results.data.map(product => ({
                                        ...product,
                                        price: Number(product.price),
                                    }))
                                ),
                            error: err => reject(err.message),
                        });
                    })
            ),
};