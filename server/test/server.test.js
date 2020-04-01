const request = require("supertest");
const expect = require("expect");
const { app } = require("./../server");

describe("get requsests for todos", () => {
  it("success request", done => {
    var text = "sdf";
    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(res => {
        expect(res.body.text).toBe(undefined);
      })
      .end((err, res) => {
        if (err) return done(err);
        else {
          User.find({})
            .then(doc => {
              expect(doc.lenght).not(0);
              done();
            })
            .catch(e => console.log(err));
        }
      });
  });
});
