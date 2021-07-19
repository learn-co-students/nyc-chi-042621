Rails Authentication & Authorization
===

![](https://media.giphy.com/media/y0s36prnnGb5u/giphy.gif)

## SWBATs
- Understand, theoretically, how authentication and authorization work
  - Understand the _difference_ between authentication and authorization and how they fit under the umbrella topic _auth_
- Discuss different encryption and hashing schemes, and `bcrypt` specifically
  - Do we want to ever store plaintext user passwords? (no)
- Augment a user model in rails using `bcrypt`, `password_digest`, and `has_secure_password`
- Expose this information in a sample rails app
- Go over sessions, cookies, and implement sign up, log in, and log out

## Part I

### Discussion
- What's the difference between Authentication vs Authorization?
- Why don't we want to save a user's password in plaintext?
- What is hashing and how does it make password storage more secure?
   - "abc123" -> "bablidjilbjdij.dguherughioz.ngiajgilj"
   - "def321" -> "eiyjeisjyiljd/eghzdkuhgkhdxugh.egeihjlixhjild"

- What are rainbow tables and how can they defeat a password hashing strategy?
  - "password123" -> "bpjrahopirjkrsklr.bfjbslkfg.fsjakfs"
  - "password1" -> "ghdgiadlgijdf.dgadgdgz.dfasdf"
  - "abc123" -> "bablidjilbjdij.dguherughioz.ngiajgilj"

- What is salting? What is a salt? How can it defeat a rainbow tables attack?
  - "abc123" + "hgdfnj" -> "oihfshijdsljglid.dgdlisgjlds.dgjlda"
  - "abc123" + "bdsz" -> "gijildjzfdfsdf.gdaegr.22sdz"


### Implemention
0. Install the `bcrypt` gem
1. Add a column to the appropriate model called `password_digest`
  1.5. Don't forget to migrate
2. In the model, write the macro `has_secure_password`

What `has_secure_password` does:
1. Forces you to save your password with the `password` key so that it can be digested into a hash
2. Gives you instance method called `authenticate` that can check to see if the password provided matches the one it has saved


## Part II
- Sign Up, Login and Logout
- Locking down parts of our application
- Using information about our signed in user


### How does auth work in theory?

##### What is the difference between sign-in and sign up?

Sign-up happens once, and afterwards the information that is used to authenticate a user exists in the system for sign-in.

Sign-up corresponds to _creating_ a new user. Sign-in is authenticating an already existing user with some identifying piece of information.

##### What is authentication?

It boils down to a really interesting question: _Are you who you say you are?_ And we use the username/password as a proxy for that.

##### What is the difference between Authentication and Authorization?

Authorization happens after authentication. It's about scope, and specific information. _What is the user allowed to see/interact with?_; what is the user **authorized** to see.

##### How do passwords work?

Do websites save our passwords? And if they do, how are they stored? Should a plaintext password ever be stored?

##### What is the difference between hashing and encrypting?

What is encryption? What can be encrypted? Anything that can be encrypted, must also be able to be decrypted. In order to decrypt a cypher, you need to know the cypher used and any parameters (offset, perhaps) used to encrypt the information.

Hashing is a little different: the ultimate goal of one-way hashing is that you cannot "decrypt" the original text. In addition to any encryption scheme, each authenticated user has a "salt", added information that augments the password to make decryption even harder.

![](https://media.giphy.com/media/fcaN0b9yGcwbm/giphy.gif)

---

### Using `bcrypt` to create passwords in Rails

What's cool about `bcrypt`? By design, it's slow. This means that anyone who wants to crack it has to take a long time to brute-force passwords. It also allows you to define a column called `password_digest` and it will do the rest of the work.

_Remember, convention over configuration._ And especially in this case, we generally don't have the time or energy to build our own encryption that surpasses what already exists.

After installing the `bcrypt` gem, you can use a macro in your user model called `has_secure_password`, which does a lot of the integration for you. Go in and test this in the console. You can show how the `user` model ends up with a `password_digest` attribute even though you send in `password` through the `create`. Do it again, this time with a `password_confirmation` in the initialization hash. You can show how rails rejects the transaction.

Now that you've created a user with a password, you can do `user.authenticate("password")`
