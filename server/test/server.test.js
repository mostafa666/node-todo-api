const request = require("supertest");
const expect = require("expect");
const { app } = require("./../server");
const { User } = require("./../models/user");
beforeEach(done => {
  User.deleteMany({}).then(done());
});

describe("get requsests for todos", () => {
  it("success request", done => {
    var text = "hello2";
    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          User.find({})
            .then(doc => {
              expect(doc.length).toBe(1);
              expect(doc[0].text).toBe(text);
              done();
            })
            .catch(e => {
              done(e);
            });
        }
      });
  });

  it("should not recieve invalid result", done => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end(() => {
        done();
      });
  });
});
