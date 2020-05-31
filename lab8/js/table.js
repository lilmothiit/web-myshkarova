const { from, interval, merge } = rxjs;
const { filter, map, flatMap, switchMap, share, tap } = rxjs.operators;

const symbols = ['AAPL', 'GOOG', 'FB', 'TWTR'];

function batch(fields) {
    const url = `` +
        `https://cloud.iexapis.com/stable/stock/market/batch` +
        `?symbols=${symbols.join()}` +
        `&types=quote` +
        `&filter=${fields.join()}` +
        `&token=${token}`;
    return from(fetch(url).then(res => res.json()).catch(err => alert('Error: ' + err)));
}

(function () {

    const update =
        merge(
            batch(['companyName', 'symbol', 'latestPrice', 'change']),
            interval(60000)
                .pipe(
                    switchMap(() => batch(['latestPrice', 'change'])),
                    share()
                )
        );

    const table = document.getElementById('main');
    const info = document.getElementById('info');

    for (const symbol of symbols) {
        const tr = document.createElement('tr');

        const NameOfCompany = document.createElement('td');
        tr.appendChild(NameOfCompany);

        const Symbol = document.createElement('td');
        tr.appendChild(Symbol);

        const Price = document.createElement('td');
        tr.appendChild(Price);

        const Change = document.createElement('td');
        tr.appendChild(Change);

        table.appendChild(tr);

        const columns = {
            'companyName':  NameOfCompany,
            'symbol':       Symbol,
            'latestPrice':  Price,
            'change':       Change
        };

        update
            .pipe(flatMap(res => Object.entries(res[symbol]['quote'])))
            .subscribe(val => columns[val[0]].innerHTML = val[1]);
    }


    update
        .pipe(
            tap(() => console.log('update')),
            switchMap(() => interval(100))
        )
        .subscribe(val => {
            info.innerHTML = `Time passed from the last update:\n ${(val * 0.1).toFixed(1)}s`;
        });

})();
