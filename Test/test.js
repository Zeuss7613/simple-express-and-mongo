import { expect } from "chai";
import request from "request";

describe("Test APİ /hello endpoint ", () => {
  it("Request hello wndpoint", () => {
    request("https://www.testurl.com", function (error, response, body) {
      expect(response.statusCode).to.equal(200);
    });
  });
});
