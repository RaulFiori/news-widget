import sinon from 'sinon';
import assert from 'assert';
// import 'regenerator-runtime/runtime';
// import axios from 'axios';
import Api from '../news';

const mockSources = [
  {
    id: 'globo',
    name: 'Globo'
  },
  {
    id: 'google-brasil',
    name: 'Google Brasil'
  }
];

describe('News API', () => {
  let apiStub;

  beforeEach(() => {
    apiStub = sinon.stub(Api.axios, 'get');
  });

  afterEach(() => {
    apiStub.restore();
  });

  test('should get sources', () => {
    apiStub.returns(Promise.resolve(mockSources));
    return Api.getSources().then(result => {
      assert.equal(apiStub.calledOnce, true);
      assert.equal(result.length, 2);
      return expect(result).toEqual(mockSources);
    });
  });
});
