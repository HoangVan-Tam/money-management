export interface Transaction{
    Categories: string,
    TransactionInfo: string,
    Note?: string,
    Income: number,
    Spending: number,
    Place: string,
    Date: string,   
}

export const Transactions: Transaction[] = [
    {
        Categories: 'F&B',
        Date: '11/06/2024',
        Income: 0,
        TransactionInfo: 'ts Candy + ts Wozzi',
        Place: '',
        Spending: 50000
    },
    {
        Categories: 'Gasoline',
        Date: '11/06/2024',
        Income: 0,
        TransactionInfo: 'Xăng',
        Place: '',
        Spending: 70000
    },
    {
        Categories: 'Transport',
        Date: '11/06/2024',
        Income: 0,
        TransactionInfo: 'Grab đi làm',
        Place: '',
        Spending: 50000
    },
    {
        Categories: 'Loan',
        Date: '11/06/2024',
        Income: 0,
        TransactionInfo: 'trả dùm chị2 tiền ship cho SMT',
        Place: '',
        Spending: 150000
    },
    {
        Categories: 'App Service',
        Date: '11/06/2024',
        Income: 0,
        TransactionInfo: 'Apple music',
        Place: '',
        Spending: 100000
    },
    {
        Categories: 'Shopping',
        Date: '11/06/2024',
        Income: 0,
        TransactionInfo: 'Quần tây routine',
        Place: '',
        Spending: 50000
    },
    {
        Categories: 'Income',
        Date: '11/06/2024',
        Income: 500000,
        TransactionInfo: 'Tiền lương công ty tâm',
        Place: '',
        Spending: 0
    }
]