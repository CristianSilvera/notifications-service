import { Content } from "./content";


describe('Notification content', () => {

  it ('should be able to crete a notification content', () => {
    const content = new Content('Cristian, you have a new friend request!');

    expect(content).toBeTruthy();
  });

  it ('should not be able to crete a notification content with less than 5 characters', () => {


    expect(() => new Content('aaa')).toThrow();
  });

  it ('should not be able to crete a notification content with more than 248 characters', () => {


    expect(() => new Content('a'.repeat(241))).toThrow();
  });

})
