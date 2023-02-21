var transactions = [
    {id:1, nom_client:"client1", montant: 5000, dateE:"26/02/2022",emetteur:"emetteur clientVIP", destinataire:"destinataire clientNormal"},
    {id:2, nom_client:"client2", montant: 24000, dateE:"16/06/2023",emetteur:"emetteur clientVIP", destinataire:"destinataire clientNormal"},
    {id:3, nom_client:"client3", montant: 600, dateE:"12/12/2024",emetteur:"emetteur clientVIP", destinataire:"destinataire clientNormal"},
]

function get_transactions(){
    return transactions;
}

function get_transaction(transaction_number)
{
    transaction_number = transaction_number-1
    return transactions[transaction_number];
}

function new_transction(customer_name, amount, dateE, emetteur ,destinataire)
{
    let newTransact = {nom_client:customer_name,montant:amount, dateE, emetteur, destinataire}
    transactions.push(newTransact)
}


module.exports.get_transactions= get_transactions
module.exports.get_transaction= get_transaction
module.exports.new_transction=new_transction
