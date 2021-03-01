export type section1 = {
    text1: string
    text2: string
    text3: string
    btnData: [{
        name: string
        link: string
    }]
}

export type spesifikasi = [
    {
        name: string
        warna: string
        jenisKertas: string
        ukuran: string
    } & {
        name: string
        warna: string
        jenisKertas: string
        laminasi: string
    } & {
        name: string
        values: string[]
    }
]

export type paketHarga = {
    message: string
    eks: number[]
    hal: number[]
    data: [{
        eks: number
        hal: number
        harga: number
    }]
}

export type contents = string[]