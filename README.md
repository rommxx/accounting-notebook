# accounting-notebook

The App for the receiving receive credit and debit financial transactions.

The App has a simple interface and you can see the transaction history.

Any transaction, which leads to negative amount within the system will be refused with 422 response code.

## Installation

```bash
$ yarn install:all
```

## Run app

```bash
$ yarn start
```

## Tests

```bash
$ yarn test
```

### Usage

GET /api/transactions

   Response example:
   ```
   [
    {
        "id": "2422a742-ace4-414b-9fe0-8b611e2d0338",
            "type": "credit",
            "amount": 25,
            "effectiveDate": "2018-07-30 09:15:14",
            "status": "accepted"
        },
        {
            "id": "801bdf18-39bd-4ecc-bc4d-103531e1c2fa",
            "type": "debit",
            "amount": 50,
            "effectiveDate": "2018-07-30 09:16:38",
            "status": "rejected"
    }
   ]
   ```
 
POST  /api/transaction

  Request format:
  ```
  {
    "type": String [credit, debit],
    "amount": Number
  }
  ```
  Response example:
  ```
  {
       "id": "2422a742-ace4-414b-9fe0-8b611e2d0338",
       "type": "credit",
       "amount": 25,
       "effectiveDate": "2018-07-30 09:15:14",
       "status": "accepted"
  }
  ```


