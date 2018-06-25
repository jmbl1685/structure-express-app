'use strict'

import chai from 'chai'
import server from '../app'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

describe('VALUE CONTROLLER TESTS', () => {

  let should = chai.should()
  const body = { id: 'A12345', value: 'Juan Batty' }

  it('valueController.Post', () => {
   
    chai.request(server)
      .post('/api/value')
      .send(body)
      .end((err, res) => {
        res.should.have.status(200)
      })

  })

  it('valueController.Get', () => {

    chai.request(server)
      .get('/api/value')
      .end((err, res) => {
        res.should.have.status(200)
      })

  })

  it('valueController.GetByID', () => {

    const id = '12345'
    chai.request(server)
      .get(`/api/value/${id}`)
      .end((err, res) => {
        res.should.have.status(200)
      })

  })

  it('valueController.Put', () => {

    const id = '12345'
    chai.request(server)
      .put(`/api/value/${id}`)
      .send(body)
      .end((err, res) => {
        res.should.have.status(200)
      })

  })

  it('valueController.Delete', () => {

    const id = '12345'
    chai.request(server)
      .delete(`/api/value/${id}`)
      .end((err, res) => {
        res.should.have.status(200)
      })

  })

})
