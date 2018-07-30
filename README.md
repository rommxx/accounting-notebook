# accounting-notebook
Accounting notebook

## Installation

```bash
$ yarn
```

 or

```bash
$ npm install
```

## Tests

```bash
$ cd server && yarn test
```

### Usage

GET /api/transactions

   Sample response:
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
  Sample response:
  ```
  {
       "id": "2422a742-ace4-414b-9fe0-8b611e2d0338",
       "type": "credit",
       "amount": 25,
       "effectiveDate": "2018-07-30 09:15:14",
       "status": "accepted"
  }
  ```


