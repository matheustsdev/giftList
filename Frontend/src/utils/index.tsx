class Utils {
    public convertMoney = (money: number) => {
        const convertedMoney = money / 100;
        return convertedMoney.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}

export const utils = new Utils();