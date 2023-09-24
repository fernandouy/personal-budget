# Personal Budguet Project
A Personal Budguet API built using Express.js and MongoDB. Built through [Codecademy's Back-End Engineer](https://www.codecademy.com/career-journey/back-end-engineer) Career Path

## Endpoints
- Retrive all envelopes `GET /envelopes`
- Retrive one envelope by id `GET /envelopes/:id`
- Update envelope by id `PUT /envelopes/:id`
- Transfer budget amount from envelope to another envelope `PUT /envelopes/:fromId/transfer/:toId`
- Create new envelope `POST /envelopes`
- Delete envelope by id `DELETE /envelopes/:id`