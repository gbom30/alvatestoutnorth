const getTransactionHistory = async (req, res) => {
    const url = 'https://infra.devskills.app/api/accounting/transactions';
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        return res.end(JSON.stringify({'success': data}));
    } catch(err) {
        return res.end(JSON.stringify({'error': err.message}));
    }  
}

export default getTransactionHistory;

