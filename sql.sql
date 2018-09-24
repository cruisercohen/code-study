CREATE TABLE stuff (
  id integer PRIMARY KEY,
  name varchar(40),
  stufftype integer,
  time date
  
);

CREATE TABLE stufftypes (
  id integer PRIMARY KEY,
  type varchar(40)
);


INSERT INTO stufftypes VALUES
  (1, 'random'),
  (2, 'specific'),
  (3, 'fake'),
  (4, 'real');
  
INSERT INTO stuff VALUES
  (1, 'some stuff', 2),
  (2, 'other stuff', 3);
  
  
  
  
  SELECT *
  FROM stuff s
  JOIN stufftypes st 
  ON st.id = s.stufftype;