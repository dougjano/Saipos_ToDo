import {CardInterface, Card} from './card';


describe('BookModel', () => {

  it('Should be created' , () => {
    const card = new Card('id', 'title', 'description', 'owner', 'email');
    expect(card).toBeTruthy();
    expect(card.id).toEqual('id');
    expect(card.title).toEqual('title');
    expect(card.description).toEqual('description');
    expect(card.owner).toEqual('owner');
    expect(card.email).toEqual('email');
  });


});
