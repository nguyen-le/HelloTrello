u1 = User.create(email: 'guest', password: 'apples')
u2 = User.create(email: 'thejamaicandave@gmail.com', password: 'password')

b1 = u1.boards.create(title: 'Workout')
b2 = u1.boards.create(title: 'Jamaica')
b3 = u2.boards.create(title: 'Bouncy')

l1 = b1.lists.create(title: 'todo', ord: 0.0)
l2 = b1.lists.create(title: 'doing', ord: 0.5)
l3 = b1.lists.create(title: 'done', ord: 1.0)

c1 = l3.cards.create(title: 'squats', description: 'feel the burn')
c2 = l3.cards.create(title: 'pushups', description: 'ooh ouch')
c3 = l3.cards.create(title: 'situps', description: 'ouchy')

c4 = l1.cards.create(title: 'squats', description: 'feel the burn')
c5 = l1.cards.create(title: 'pushups', description: 'ooh ouch')
c6 = l1.cards.create(title: 'situps', description: 'ouchy')

c7 = l2.cards.create(title: 'squats', description: 'feel the burn')
c8 = l2.cards.create(title: 'pushups', description: 'ooh ouch')
c9 = l2.cards.create(title: 'situps', description: 'ouchy')

i1 = c1.items.create(done: false, title: 'mocha')
i2 = c1.items.create(done: true, title: 'mocha')
i3 = c1.items.create(done: true, title: 'cookie')

b1.members = [u2]
b1.save

l1 = b2.lists.create(title: 'todo' , ord: 0.0)
l2 = b2.lists.create(title: 'doing', ord: 0.5)
l3 = b2.lists.create(title: 'done' , ord: 1.0)

c1 = l3.cards.create(title: 'buy ticket', description: 'feel the burn')
c2 = l3.cards.create(title: 'buy luggage', description: 'ooh ouch')
c3 = l3.cards.create(title: 'rent hotels', description: 'ouchy')

c4 = l1.cards.create(title: 'rent car', description: 'feel the burn')
c5 = l1.cards.create(title: 'contacting old friends', description: 'ooh ouch')
c6 = l1.cards.create(title: 'emergency travel kit', description: 'ouchy')

c7 = l2.cards.create(title: 'buy tickets', description: 'feel the burn')
c8 = l2.cards.create(title: 'choose clothes', description: 'ooh ouch')
c9 = l2.cards.create(title: 'get petsitter', description: 'ouchy')

i1 = c1.items.create(done: false, title: 'mocha')
i2 = c1.items.create(done: true, title: 'mocha')
i3 = c1.items.create(done: true, title: 'cookie')

b2.members = [u2]
b2.save
