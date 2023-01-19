export default `
<div class="container">
    <div class="row m-1 p-1 m-md-3 p-md-3">
        <div class="col m-2 p-2">
            <div class="m-2 fs-5">
                <h1 id="title">Exchange Rates App</h1>
                <p class="fw-bold">Select a base and target currency and type the desired amount you'd like to convert and see its exchange rates.</p>
            </div>
        </div>
        <div class="col m-2 p-2">
            <label id="base-currency-label" class="rounded-pill m-1 p-1 fw-bold" for="">
                Base Currency</label>
            <div class="d-flex pb-3">
                <select id="base-currency" class="text-center rounded-pill" name="" id="">
                    <option value="USD">Select</option>
                </select>
                <input id="base-amount" class="text-center rounded-pill" type="number">
            </div>
            <p class="d-none h5 m-1 pb-1 fw-bold" id="equivalency"><span id="base-equivalency"></span> is equivalent to <span id="target-equivalency"></span>.</p>
            <label id="target-currency-label" class="rounded-pill m-1 p-1 fw-bold" for="">
                Target Currency</label>
            <div class="d-flex">
                <select id="target-currency" class="text-center rounded-pill" name="" id="">
                    <option value="ARS">Select</option>
                </select>
                <input id="target-amount" class="text-center rounded-pill" type="number">
            </div>
        </div>
    </div>
    <section>
        <div class="currency-rates text-center">
            <h3 class="fs-2">Exchange rates for <span id="base-currency-title">...</span> as of <span id="current-date">...</span>.</h3>
            <table id="main-table" class="table text-center">
                <thead>
                    <tr>
                       <th id='table-currency-code-title'>Currency Code</th>
                       <th id='table-currency-name-title'>Currency Name</th>
                       <th id='table-currency-rate-title'>Conversion Rate</th>
                    </tr>
                </thead>
                <tbody id="currency-table">
                </tbody>
            </table>
        </div>
    </section>
</div>
<script type="module" src="./index.js"></script>
</body>
</html>`;
