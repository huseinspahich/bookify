CREATE DATABASE book
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  about TEXT NOT NULL,
  published INT NOT NULL,
  pages INT NOT NULL,
  author VARCHAR(100) NOT NULL
);

INSERT INTO books (title,about,published,pages,author)
VALUES ('Hackers & Painters','A collection of essays from one of the best. Loosely about intelligence, entrepreneurship, programming, and questioning norms. Many brilliant ideas and insights.',2003, 345, 'Paul Graham'),
        ('Predictably Irrational','My favorite type of book: pointing out and understanding all of the counter-intuitive things people do.', 2007, 123, 'Dan Ariely'),
		('The Magic of Thinking Big','A classic self-help book. Exactly what youd expect. But very good.', 2016, 234, 'David Schwartz'),
		('Introducing Pragmatism','Semi-academic introduction to philosophers in the pragmatism tradition. Not a light read, but some great insights and ideas in the quotes.', 2000, 378, 'Cornelis de Waal'),
		('The Box','History of the shipping container, and how it affected the world economy. Also for ambitious entrepreneurs, Malcom McLean is a damn good role model. Great read.', 1994, 678, 'Mac Levison'),
		('Before We Go','Collection of essays about fitness and weight lifting. I love all of Dan Johns books. This one is one of his best. Nothing revolutionary. Just great reminders.', 2009, 169, 'Dan John'),
		('Die Empty','Motivating thoughts on doing your work. Your work is the expression of your priorities. “Work” = creating value where it didnt previously exist. An interesting definition of three kinds of work: mapping, making, and meshing.', 2020, 156, 'Todd Henry'),
		('Give and Take','If you feel you are too generous, or too greedy, or are wary and insist on reciprocation, consider reading this research-based look at the subject of these different personality types. Counter-intuitive findings.', 2013, 102, 'Adam Grant'),
		('Making Ieas Happen','The full title - “Making Ideas Happen: Overcoming the Obstacles Between Vision and Reality” - describes its contents perfectly. Great book on that subject.', 1977, 222, 'Scott Belsky'),
		('Talent is Overrated','Talent is not innate - it comes from thousands of hours of deliberate practice: focused improving of your shortcomings. Thats it. If you can get past the first 20% of the book that just asks questions, the next 60% is quite good', 2004, 173, 'Geof Colvin'),
		('Starting Strength','For those who ever considered getting fit, this is the way to do it, and the best book on the subject. Not sure if I should put this in my book list, because its not something you read, but something you do.', 2018, 148, 'Mike Rippetoe');
        