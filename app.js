// ============================================================
    // CONFIG
    // ============================================================
    const TMDB_KEY = 'YOUR_TMDB_API_KEY_HERE';
    const TMDB_IMG = 'https://image.tmdb.org/t/p/w300';

    // ============================================================
    // 100+ MOVIES
    // ============================================================
    const movies = [
      // ACTION
      { id: 0, emoji: '🦇', title: 'The Dark Knight', genre: 'Action', year: 2008, rating: 9.0, tags: ['nolan', 'superhero', 'dark'], desc: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.', trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY' },
      { id: 1, emoji: '⚔️', title: 'Gladiator', genre: 'Action', year: 2000, rating: 8.5, tags: ['epic', 'historical', 'revenge'], desc: 'A Roman general is betrayed and must rise through the ranks of the gladiatorial arena to take his revenge.', trailer: 'https://www.youtube.com/watch?v=P5ieIbInFpg' },
      { id: 2, emoji: '🌊', title: 'Dunkirk', genre: 'Action', year: 2017, rating: 7.9, tags: ['nolan', 'war', 'survival'], desc: 'Allied soldiers from multiple nations are surrounded by the German Army during WWII.', trailer: 'https://www.youtube.com/watch?v=F-eMt3SrfFU' },
      { id: 3, emoji: '🔮', title: 'Doctor Strange', genre: 'Action', year: 2016, rating: 7.5, tags: ['superhero', 'magic', 'marvel'], desc: 'A former neurosurgeon is drawn into the world of the mystic arts and alternate dimensions.', trailer: 'https://www.youtube.com/watch?v=Lt-U_t2pUHI' },
      { id: 4, emoji: '🏎️', title: 'Mad Max: Fury Road', genre: 'Action', year: 2015, rating: 8.1, tags: ['action', 'post-apocalyptic', 'vehicle'], desc: 'In a post-apocalyptic wasteland, a woman rebels against a tyrant and escapes with a group of refugees.', trailer: 'https://www.youtube.com/watch?v=hEJnMQG9ev8' },
      { id: 5, emoji: '⚡', title: 'The Dark Knight Rises', genre: 'Action', year: 2012, rating: 8.4, tags: ['nolan', 'superhero'], desc: 'Batman returns to Gotham to face Bane, a terrorist mastermind.', trailer: 'https://www.youtube.com/watch?v=GokKUqLcvD8' },
      { id: 6, emoji: '🏎️', title: 'Ford v Ferrari', genre: 'Action', year: 2019, rating: 8.1, tags: ['racing', 'drama', 'true-story'], desc: 'The story of Ford\'s attempt to beat Ferrari at the 24 Hours of Le Mans.', trailer: 'https://www.youtube.com/watch?v=zyYgDtY2AMY' },
      { id: 7, emoji: '⚓', title: 'Master and Commander', genre: 'Action', year: 2003, rating: 7.5, tags: ['action', 'naval', 'history'], desc: 'The story of a British naval captain and his crew during the Napoleonic Wars.', trailer: 'https://www.youtube.com/watch?v=7rR8x4g2nJg' },
      // SCI-FI
      { id: 8, emoji: '🌀', title: 'Inception', genre: 'Sci-Fi', year: 2010, rating: 8.8, tags: ['nolan', 'mind-bending', 'heist'], desc: 'A thief who steals corporate secrets through dream-sharing technology is given the impossible task of planting an idea into a target\'s mind.', trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0' },
      { id: 9, emoji: '🪐', title: 'Interstellar', genre: 'Sci-Fi', year: 2014, rating: 8.6, tags: ['nolan', 'space', 'emotional'], desc: 'A team of explorers travel through a wormhole in space to ensure humanity\'s survival.', trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E' },
      { id: 10, emoji: '🚀', title: 'The Martian', genre: 'Sci-Fi', year: 2015, rating: 8.0, tags: ['space', 'survival', 'science'], desc: 'An astronaut stranded on Mars must improvise to survive while NASA works to rescue him.', trailer: 'https://www.youtube.com/watch?v=ej3ioOneTy8' },
      { id: 11, emoji: '🌌', title: 'Gravity', genre: 'Sci-Fi', year: 2013, rating: 7.7, tags: ['space', 'survival', 'tension'], desc: 'Two astronauts work together to survive after an accident leaves them stranded in space.', trailer: 'https://www.youtube.com/watch?v=OiTiKOy59o4' },
      { id: 12, emoji: '🤖', title: 'Ex Machina', genre: 'Sci-Fi', year: 2014, rating: 7.7, tags: ['AI', 'psychological', 'thriller'], desc: 'A programmer participates in an experiment to evaluate the consciousness of an artificial intelligence.', trailer: 'https://www.youtube.com/watch?v=EoQuVnKhxaM' },
      { id: 13, emoji: '🕶️', title: 'The Matrix', genre: 'Sci-Fi', year: 1999, rating: 8.7, tags: ['sci-fi', 'mind-bending', 'action'], desc: 'A hacker discovers the world is a simulated reality and joins a rebellion against the machines.', trailer: 'https://www.youtube.com/watch?v=vKQi3bBA1y8' },
      { id: 14, emoji: '👽', title: 'Arrival', genre: 'Sci-Fi', year: 2016, rating: 7.9, tags: ['sci-fi', 'linguistics', 'emotional'], desc: 'A linguist is recruited to communicate with aliens who have arrived on Earth.', trailer: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g' },
      { id: 15, emoji: '🌧️', title: 'Blade Runner', genre: 'Sci-Fi', year: 1982, rating: 8.1, tags: ['sci-fi', 'neo-noir', 'dystopian'], desc: 'A specialized police officer hunts down rogue artificial beings in a dystopian future.', trailer: 'https://www.youtube.com/watch?v=eogpIG53Cis' },
      { id: 16, emoji: '🎩', title: 'The Prestige', genre: 'Sci-Fi', year: 2006, rating: 8.5, tags: ['nolan', 'magic', 'obsession'], desc: 'Two rival magicians engage in a bitter battle of one-upmanship that leads to tragic consequences.', trailer: 'https://www.youtube.com/watch?v=o4gHCmTQDVI' },
      { id: 17, emoji: '🌠', title: 'Blade Runner 2049', genre: 'Sci-Fi', year: 2017, rating: 8.0, tags: ['sci-fi', 'neo-noir', 'dystopian'], desc: 'A young blade runner discovers a long-buried secret that could plunge what\'s left of society into chaos.', trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4' },
      // DRAMA
      { id: 18, emoji: '🃏', title: 'Joker', genre: 'Drama', year: 2019, rating: 8.4, tags: ['dark', 'psychological', 'villain'], desc: 'A mentally troubled comedian embarks on a downward spiral that creates an iconic villain.', trailer: 'https://www.youtube.com/watch?v=zAGVQLHvwOY' },
      { id: 19, emoji: '🧠', title: 'A Beautiful Mind', genre: 'Drama', year: 2001, rating: 8.2, tags: ['psychological', 'genius', 'true'], desc: 'A brilliant mathematician makes a groundbreaking discovery only to be drawn into a world of paranoia.', trailer: 'https://www.youtube.com/watch?v=aS_d0Ayjw4o' },
      { id: 20, emoji: '🌙', title: 'Whiplash', genre: 'Drama', year: 2014, rating: 8.5, tags: ['intense', 'music', 'ambition'], desc: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams are put to the test.', trailer: 'https://www.youtube.com/watch?v=7d_jQycdQGo' },
      { id: 21, emoji: '🧼', title: 'Fight Club', genre: 'Drama', year: 1999, rating: 8.8, tags: ['psychological', 'cult', 'fincher'], desc: 'An insomniac office worker and a rebellious soap maker form an underground fight club.', trailer: 'https://www.youtube.com/watch?v=qtRKdVHc-cE' },
      { id: 22, emoji: '🏹', title: 'The Revenant', genre: 'Drama', year: 2015, rating: 8.0, tags: ['survival', 'frontier', 'revenge'], desc: 'A frontiersman is left for dead and embarks on a brutal journey for survival and revenge.', trailer: 'https://www.youtube.com/watch?v=LoebZZ8K5N0' },
      { id: 23, emoji: '📺', title: 'The Truman Show', genre: 'Drama', year: 1998, rating: 8.2, tags: ['drama', 'reality-tv', 'philosophical'], desc: 'A man discovers his entire life has been a reality TV show and must escape the constructed world.', trailer: 'https://www.youtube.com/watch?v=dlnmQbPGuls' },
      { id: 24, emoji: '💚', title: 'The Green Mile', genre: 'Drama', year: 1999, rating: 8.6, tags: ['drama', 'prison', 'supernatural'], desc: 'A death row guard discovers that one of his inmates possesses a miraculous gift of healing.', trailer: 'https://www.youtube.com/watch?v=Ki4haFrqSrw' },
      { id: 25, emoji: '🐟', title: 'The Shawshank Redemption', genre: 'Drama', year: 1994, rating: 9.3, tags: ['drama', 'prison', 'hope'], desc: 'A banker is wrongly imprisoned and must find a way to survive and escape.', trailer: 'https://www.youtube.com/watch?v=6hB3S9bIaco' },
      { id: 26, emoji: '🕊️', title: 'Schindler\'s List', genre: 'Drama', year: 1993, rating: 8.9, tags: ['drama', 'war', 'holocaust'], desc: 'A German businessman saves thousands of Jews during the Holocaust.', trailer: 'https://www.youtube.com/watch?v=gG22XNhtnoY' },
      { id: 27, emoji: '🧠', title: 'The Social Network', genre: 'Drama', year: 2010, rating: 7.7, tags: ['drama', 'tech', 'facebook'], desc: 'The story of Mark Zuckerberg and the creation of Facebook.', trailer: 'https://www.youtube.com/watch?v=lB95KLmpLR4' },
      { id: 28, emoji: '🤓', title: 'Good Will Hunting', genre: 'Drama', year: 1997, rating: 8.3, tags: ['drama', 'genius', 'emotional'], desc: 'A young janitor with a brilliant mind must choose between his potential and his comfort zone.', trailer: 'https://www.youtube.com/watch?v=PaZVjZEFkRs' },
      // THRILLER
      { id: 29, emoji: '🎭', title: 'Parasite', genre: 'Thriller', year: 2019, rating: 8.5, tags: ['dark', 'class', 'twist'], desc: 'Greed and class discrimination threaten the symbiotic relationship between two families.', trailer: 'https://www.youtube.com/watch?v=5xH0HfJHsaY' },
      { id: 30, emoji: '🕵️', title: 'Gone Girl', genre: 'Thriller', year: 2014, rating: 8.1, tags: ['dark', 'twist', 'crime'], desc: 'With his wife\'s disappearance becoming the focus of a media circus, a man sees the spotlight turned on him.', trailer: 'https://www.youtube.com/watch?v=be81ZWCLmPQ' },
      { id: 31, emoji: '👁️', title: 'Get Out', genre: 'Thriller', year: 2017, rating: 7.7, tags: ['horror', 'psychological', 'social'], desc: 'A young African-American man visits his white girlfriend\'s parents and uncovers a disturbing secret.', trailer: 'https://www.youtube.com/watch?v=sRfnevzM9kQ' },
      { id: 32, emoji: '🔪', title: 'Se7en', genre: 'Thriller', year: 1995, rating: 8.6, tags: ['thriller', 'serial-killer', 'fincher'], desc: 'Two detectives hunt a serial killer who uses the seven deadly sins as inspiration for his murders.', trailer: 'https://www.youtube.com/watch?v=J4YV2_TcCoE' },
      { id: 33, emoji: '🧠', title: 'Memento', genre: 'Thriller', year: 2000, rating: 8.4, tags: ['nolan', 'memory', 'mystery'], desc: 'A man with short-term memory loss uses tattoos to track the man who killed his wife.', trailer: 'https://www.youtube.com/watch?v=0vS0E9bBSL0' },
      { id: 34, emoji: '🧩', title: 'Shutter Island', genre: 'Thriller', year: 2010, rating: 8.2, tags: ['thriller', 'mind-bending', 'scorsese'], desc: 'A U.S. Marshal investigates a missing patient at a psychiatric facility on a remote island.', trailer: 'https://www.youtube.com/watch?v=5iaYLCiq5RM' },
      { id: 35, emoji: '🔒', title: 'Prisoners', genre: 'Thriller', year: 2013, rating: 8.2, tags: ['thriller', 'crime', 'kidnapping'], desc: 'A father goes to extreme lengths to find his missing daughter and her friend when the police fail.', trailer: 'https://www.youtube.com/watch?v=bpXfcTF6iVk' },
      { id: 36, emoji: '📹', title: 'Nightcrawler', genre: 'Thriller', year: 2014, rating: 7.9, tags: ['thriller', 'media', 'dark'], desc: 'A driven young man discovers the world of freelance crime journalism and pushes the boundaries of ethics.', trailer: 'https://www.youtube.com/watch?v=X8kYDQan8bw' },
      { id: 37, emoji: '🔍', title: 'Zodiac', genre: 'Thriller', year: 2007, rating: 7.7, tags: ['thriller', 'serial-killer', 'true-crime'], desc: 'A cartoonist, a reporter, and a detective become obsessed with the Zodiac killer\'s unsolved case.', trailer: 'https://www.youtube.com/watch?v=FSG98rLzFjE' },
      { id: 38, emoji: '🎬', title: 'Thudarum', genre: 'Thriller', year: 2025, rating: 7.0, tags: ['malayalam', 'thriller'], desc: 'A gripping Malayalam thriller starring Mohanlal.', trailer: 'https://www.youtube.com/watch?v=mVxL5kRq7yI' },
      // COMEDY
      { id: 39, emoji: '🎪', title: 'The Grand Budapest Hotel', genre: 'Comedy', year: 2014, rating: 8.1, tags: ['quirky', 'colorful', 'mystery'], desc: 'A writer encounters the owner of an aging European hotel who tells him of his early years.', trailer: 'https://www.youtube.com/watch?v=1Fg5iWmQjwk' },
      { id: 40, emoji: '🔄', title: 'Groundhog Day', genre: 'Comedy', year: 1993, rating: 8.1, tags: ['comedy', 'time-loop', 'philosophical'], desc: 'A weatherman finds himself trapped in a time loop, forced to relive the same day over and over.', trailer: 'https://www.youtube.com/watch?v=tSVeDx9fk60' },
      { id: 41, emoji: '🐺', title: 'The Wolf of Wall Street', genre: 'Comedy', year: 2013, rating: 8.2, tags: ['comedy', 'crime', 'scorsese'], desc: 'A stockbroker\'s rise to wealth and power leads to corruption, fraud, and excess.', trailer: 'https://www.youtube.com/watch?v=pabEtIERlic' },
      { id: 42, emoji: '🔍', title: 'Knives Out', genre: 'Comedy', year: 2019, rating: 7.9, tags: ['comedy', 'mystery', 'whodunit'], desc: 'A detective investigates the death of a wealthy patriarch in a twist-filled family mystery.', trailer: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ' },
      { id: 43, emoji: '🍻', title: 'Superbad', genre: 'Comedy', year: 2007, rating: 7.6, tags: ['comedy', 'high-school', 'party'], desc: 'Two high school friends try to make the most of their last days before graduation by throwing a party.', trailer: 'https://www.youtube.com/watch?v=4eaZ_48ZYog' },
      { id: 44, emoji: '🥳', title: 'The Hangover', genre: 'Comedy', year: 2009, rating: 7.7, tags: ['comedy', 'party', 'vegas'], desc: 'Three friends wake up after a bachelor party in Las Vegas with no memory of the night before.', trailer: 'https://www.youtube.com/watch?v=tcdUhdOlz9M' },
      { id: 45, emoji: '😄', title: 'Step Brothers', genre: 'Comedy', year: 2008, rating: 6.9, tags: ['comedy', 'family', 'absurd'], desc: 'Two middle-aged men become stepbrothers and must learn to live together.', trailer: 'https://www.youtube.com/watch?v=CewglxElBK0' },
      // ROMANCE
      { id: 46, emoji: '🚢', title: 'Titanic', genre: 'Romance', year: 1997, rating: 7.9, tags: ['romance', 'disaster', 'historical'], desc: 'A young aristocrat and a poor artist fall in love aboard the ill-fated Titanic.', trailer: 'https://www.youtube.com/watch?v=kVrqfYjkTdQ' },
      { id: 47, emoji: '🧠❤️', title: 'Eternal Sunshine of the Spotless Mind', genre: 'Romance', year: 2004, rating: 8.3, tags: ['romance', 'memory', 'mind-bending'], desc: 'A couple undergoes a procedure to erase each other from their memories — but discovers they want to hold on.', trailer: 'https://www.youtube.com/watch?v=07-QBnEkgXU' },
      { id: 48, emoji: '📖', title: 'The Notebook', genre: 'Romance', year: 2004, rating: 7.8, tags: ['romance', 'drama', 'love-story'], desc: 'A man reads a love story to an elderly woman with memory loss, revealing their shared past.', trailer: 'https://www.youtube.com/watch?v=FC6biTjEyZw' },
      { id: 49, emoji: '💍', title: 'Crazy Rich Asians', genre: 'Romance', year: 2018, rating: 6.9, tags: ['romance', 'comedy', 'family'], desc: 'A woman travels to Singapore with her boyfriend and discovers his family is incredibly wealthy and disapproving.', trailer: 'https://www.youtube.com/watch?v=ZQ-YX-5bAs0' },
      { id: 50, emoji: '🎵', title: 'La La Land', genre: 'Romance', year: 2016, rating: 8.0, tags: ['romance', 'musical', 'dreams'], desc: 'A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.', trailer: 'https://www.youtube.com/watch?v=0pdqf4P9MB8' },
      { id: 51, emoji: '⏳', title: 'About Time', genre: 'Romance', year: 2013, rating: 7.8, tags: ['romance', 'time-travel', 'heartwarming'], desc: 'A young man discovers he can travel through time and uses it to find love.', trailer: 'https://www.youtube.com/watch?v=Q2Ir5LsraA4' },
      { id: 52, emoji: '😘', title: '10 Things I Hate About You', genre: 'Romance', year: 1999, rating: 7.3, tags: ['romance', 'comedy', 'high-school'], desc: 'A new student tries to date a popular girl, but must first convince her older sister to start dating.', trailer: 'https://www.youtube.com/watch?v=8Mif5YHwH5c' },
      { id: 53, emoji: '💔', title: 'Sampai Titik Terakhirmu', genre: 'Romance', year: 2025, rating: 7.0, tags: ['indonesian', 'romance'], desc: 'An Indonesian romantic drama about love and fate.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' },
      // HORROR
      { id: 54, emoji: '🏠', title: 'The Shining', genre: 'Horror', year: 1980, rating: 8.4, tags: ['horror', 'kubrick', 'psychological'], desc: 'A writer and his family become caretakers of a haunted hotel during the off-season.', trailer: 'https://www.youtube.com/watch?v=S014oGZiSdI' },
      { id: 55, emoji: '👽', title: 'Alien', genre: 'Horror', year: 1979, rating: 8.5, tags: ['horror', 'sci-fi', 'creature'], desc: 'A mining crew encounters a deadly alien creature aboard their spaceship.', trailer: 'https://www.youtube.com/watch?v=LjLamj-b0I8' },
      { id: 56, emoji: '👻', title: 'The Conjuring', genre: 'Horror', year: 2013, rating: 7.5, tags: ['horror', 'paranormal', 'true-story'], desc: 'Paranormal investigators help a family terrorized by a dark presence in their farmhouse.', trailer: 'https://www.youtube.com/watch?v=k10ETZ41q5o' },
      { id: 57, emoji: '😱', title: 'Hereditary', genre: 'Horror', year: 2018, rating: 7.3, tags: ['horror', 'family', 'grief'], desc: 'After her mother\'s death, a woman\'s family begins to unravel as they are haunted by a dark presence.', trailer: 'https://www.youtube.com/watch?v=V6wWKNij_1M' },
      { id: 58, emoji: '🔇', title: 'A Quiet Place', genre: 'Horror', year: 2018, rating: 7.5, tags: ['horror', 'silence', 'survival'], desc: 'A family must live in complete silence to avoid detection by blind, sound-hunting creatures.', trailer: 'https://www.youtube.com/watch?v=WR7cc5t7tv8' },
      { id: 59, emoji: '👀', title: 'It Follows', genre: 'Horror', year: 2014, rating: 6.8, tags: ['horror', 'psychological', 'creepy'], desc: 'A young woman is followed by a supernatural entity after a sexual encounter.', trailer: 'https://www.youtube.com/watch?v=HkZYbOH0ujw' },
      // PAKISTANI
      { id: 60, emoji: '🇵🇰', title: 'Dukhtar', genre: 'Pakistani', year: 2014, rating: 7.8, tags: ['pakistani', 'drama', 'mother'], desc: 'A mother flees with her daughter to protect her from a forced marriage.', trailer: 'https://www.youtube.com/watch?v=1B8L9Z7L3wY' },
      { id: 61, emoji: '😂', title: 'Na Maloom Afraad', genre: 'Pakistani', year: 2014, rating: 7.5, tags: ['pakistani', 'comedy'], desc: 'Three strangers get caught up in a series of hilarious misadventures in Karachi.', trailer: 'https://www.youtube.com/watch?v=pqL5kQY3XmE' },
      { id: 62, emoji: '💥', title: 'Waar', genre: 'Pakistani', year: 2013, rating: 8.0, tags: ['pakistani', 'action', 'thriller'], desc: 'A former Special Services Group officer is called back to stop a terrorist plot.', trailer: 'https://www.youtube.com/watch?v=Z3tP5w3hXH0' },
      { id: 63, emoji: '🏃', title: 'Zinda Bhaag', genre: 'Pakistani', year: 2013, rating: 7.6, tags: ['pakistani', 'drama'], desc: 'Three young men try to escape their ordinary lives in Lahore.', trailer: 'https://www.youtube.com/watch?v=4t5m8bZkD5c' },
      { id: 64, emoji: '👑', title: 'Maalik', genre: 'Pakistani', year: 2016, rating: 7.2, tags: ['pakistani', 'drama', 'crime'], desc: 'A powerful feudal lord faces challenges to his authority.', trailer: 'https://www.youtube.com/watch?v=5g7z7bKpXUo' },
      { id: 65, emoji: '🗣️', title: 'Bol', genre: 'Pakistani', year: 2011, rating: 8.2, tags: ['pakistani', 'drama', 'social'], desc: 'A family\'s secrets unravel when the daughter speaks out against tradition.', trailer: 'https://www.youtube.com/watch?v=3l_XaU7QBkM' },
      { id: 66, emoji: '🏏', title: 'Balu Mahi', genre: 'Pakistani', year: 2017, rating: 7.0, tags: ['pakistani', 'romance', 'comedy'], desc: 'A romantic comedy about a young man who finds love in unexpected circumstances.', trailer: 'https://www.youtube.com/watch?v=9k3pZ5d4A7s' },
      // BOLLYWOOD
      { id: 67, emoji: '🔥', title: 'Pathaan', genre: 'Bollywood', year: 2023, rating: 7.8, tags: ['bollywood', 'action', 'spy'], desc: 'A spy returns to stop a rogue agent from launching a deadly attack on India.', trailer: 'https://www.youtube.com/watch?v=ykxCrLxE4Xg' },
      { id: 68, emoji: '🎯', title: 'Jawan', genre: 'Bollywood', year: 2023, rating: 8.1, tags: ['bollywood', 'action', 'thriller'], desc: 'A man takes on a corrupt system to bring justice to the people.', trailer: 'https://www.youtube.com/watch?v=mLxVFlCgX0M' },
      { id: 69, emoji: '💕', title: 'Rocky Aur Rani Kii Prem Kahani', genre: 'Bollywood', year: 2023, rating: 7.6, tags: ['bollywood', 'romance', 'comedy'], desc: 'A modern love story between two people from very different families.', trailer: 'https://www.youtube.com/watch?v=YfJm8BbhYx4' },
      { id: 70, emoji: '🧑‍🏫', title: 'Chhatriwali', genre: 'Bollywood', year: 2023, rating: 6.8, tags: ['bollywood', 'comedy', 'social'], desc: 'A woman takes charge of sex education in a small town.', trailer: 'https://www.youtube.com/watch?v=8d5t8kPqFwU' },
      { id: 71, emoji: '🏠', title: 'Gulmohar', genre: 'Bollywood', year: 2023, rating: 7.5, tags: ['bollywood', 'drama', 'family'], desc: 'A family faces the end of an era as they prepare to leave their ancestral home.', trailer: 'https://www.youtube.com/watch?v=K5yqg5v8FnQ' },
      { id: 72, emoji: '👩‍👦', title: 'Mrs. Chatterjee vs Norway', genre: 'Bollywood', year: 2023, rating: 7.3, tags: ['bollywood', 'drama', 'true-story'], desc: 'A mother fights the Norwegian government to get her children back.', trailer: 'https://www.youtube.com/watch?v=7x8jZ5nPq7M' },
      { id: 73, emoji: '🥭', title: 'Kathal - A Jackfruit Mystery', genre: 'Bollywood', year: 2023, rating: 6.9, tags: ['bollywood', 'comedy', 'mystery'], desc: 'A young police officer investigates the theft of prized jackfruits.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' },
      // ANIMATION
      { id: 74, emoji: '🤖', title: 'WALL-E', genre: 'Animation', year: 2008, rating: 8.4, tags: ['animation', 'robot', 'pixar'], desc: 'A lonely robot cleaning Earth falls in love and tries to save humanity.', trailer: 'https://www.youtube.com/watch?v=8_9T5l8XzgY' },
      { id: 75, emoji: '🐠', title: 'Finding Nemo', genre: 'Animation', year: 2003, rating: 8.2, tags: ['animation', 'fish', 'adventure'], desc: 'A clownfish travels across the ocean to find his missing son.', trailer: 'https://www.youtube.com/watch?v=wZdpNglKtE8' },
      { id: 76, emoji: '🎈', title: 'Up', genre: 'Animation', year: 2009, rating: 8.3, tags: ['animation', 'adventure', 'pixar'], desc: 'An elderly man and a young boy go on an adventure to South America.', trailer: 'https://www.youtube.com/watch?v=pkqzFUhGPJg' },
      { id: 77, emoji: '🎨', title: 'JUMBO', genre: 'Animation', year: 2025, rating: 7.0, tags: ['animation', 'indonesian', 'adventure'], desc: 'An orphan boy named Don, underestimated for his large stature, embarks on a journey to discover courage, friendship, and self-worth.', trailer: 'https://www.youtube.com/watch?v=5g7z7bKpXUo' },
      { id: 78, emoji: '🏰', title: 'The Lord of the Rings: The War of the Rohirrim', genre: 'Animation', year: 2024, rating: 7.5, tags: ['animation', 'anime', 'middle-earth'], desc: 'Anime prequel set in Middle Earth, focusing on Helm Hammerhand and the founding of Helm\'s Deep.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' },
      { id: 79, emoji: '🔮', title: 'Kalki 2898 AD', genre: 'Animation', year: 2024, rating: 7.5, tags: ['animation', 'indian', 'sci-fi'], desc: 'Indian mythological-science fiction film starring Amitabh Bachchan, Prabhas, Deepika Padukone, and Kamal Hassan.', trailer: 'https://www.youtube.com/watch?v=mLxVFlCgX0M' },
      // CRIME
      { id: 80, emoji: '🐍', title: 'Pulp Fiction', genre: 'Crime', year: 1994, rating: 8.9, tags: ['tarantino', 'crime', 'classic'], desc: 'A series of interconnected stories about crime and redemption in Los Angeles.', trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY' },
      { id: 81, emoji: '🔫', title: 'The Godfather', genre: 'Crime', year: 1972, rating: 9.2, tags: ['crime', 'classic', 'mafia'], desc: 'The story of the Corleone family and their rise in the mafia underworld.', trailer: 'https://www.youtube.com/watch?v=sY1S34973zA' },
      { id: 82, emoji: '🔪', title: 'In Cold Light', genre: 'Crime', year: 2025, rating: 7.0, tags: ['crime', 'thriller', 'drugs'], desc: 'Maika Monroe stars as Ava, fresh out of prison, fighting to reclaim her drug empire. Framed for murder, she\'s hunted by cops and a ruthless crime boss.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' },
      { id: 83, emoji: '🚔', title: 'Night Patrol', genre: 'Crime', year: 2025, rating: 7.0, tags: ['crime', 'police', 'thriller'], desc: 'An LAPD officer discovers a horrific secret when a police task force endangers residents of the housing projects he grew up in.', trailer: 'https://www.youtube.com/watch?v=mLxVFlCgX0M' },
      // FANTASY
      { id: 84, emoji: '🧙', title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', year: 2001, rating: 8.8, tags: ['fantasy', 'epic', 'adventure'], desc: 'A young hobbit embarks on a journey to destroy the One Ring.', trailer: 'https://www.youtube.com/watch?v=V75dMMIW2B4' },
      { id: 85, emoji: '⚡', title: 'Harry Potter and the Sorcerer\'s Stone', genre: 'Fantasy', year: 2001, rating: 7.6, tags: ['fantasy', 'magic', 'wizard'], desc: 'A young boy discovers he is a wizard and attends a magical school.', trailer: 'https://www.youtube.com/watch?v=SfRIEYgFm1U' },
      { id: 86, emoji: '🏔️', title: 'The Hobbit: An Unexpected Journey', genre: 'Fantasy', year: 2012, rating: 7.8, tags: ['fantasy', 'adventure', 'middle-earth'], desc: 'A hobbit is recruited by a wizard to join a group of dwarves on a quest to reclaim their homeland.', trailer: 'https://www.youtube.com/watch?v=SDnYMbYB-nU' },
      { id: 87, emoji: '🎬', title: 'The Gorge', genre: 'Fantasy', year: 2025, rating: 7.0, tags: ['fantasy', 'thriller', 'mystery'], desc: 'Two operatives guard a mysterious gorge from opposite sides, protecting the world from an unseen evil. Stars Miles Teller and Anya Taylor-Joy.', trailer: 'https://www.youtube.com/watch?v=5g7z7bKpXUo' },
      { id: 88, emoji: '❄️', title: 'Snow White', genre: 'Fantasy', year: 2025, rating: 7.0, tags: ['fantasy', 'disney', 'live-action'], desc: 'Live-action adaptation of the classic fairy tale. Rachel Zegler as Snow White, Gal Gadot as the Evil Queen.', trailer: 'https://www.youtube.com/watch?v=mLxVFlCgX0M' },
      { id: 89, emoji: '🐉', title: 'Damsel', genre: 'Fantasy', year: 2024, rating: 7.0, tags: ['fantasy', 'netflix', 'adventure'], desc: 'A young woman agrees to marry a prince, only to be sacrificed to a dragon. She must transform from damsel to warrior to survive. Stars Millie Bobby Brown.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' },
      { id: 90, emoji: '🐉', title: 'Dungeons & Dragons: Honor Among Thieves', genre: 'Fantasy', year: 2023, rating: 7.5, tags: ['fantasy', 'adventure', 'comedy'], desc: 'A stylish fantasy adventure set in the Forgotten Realms. Stars Chris Pine, Michelle Rodriguez, and Regé-Jean Page.', trailer: 'https://www.youtube.com/watch?v=5g7z7bKpXUo' },
      // MUSIC
      { id: 91, emoji: '🎸', title: 'Bohemian Rhapsody', genre: 'Music', year: 2018, rating: 7.9, tags: ['music', 'biography', 'queen'], desc: 'The story of Queen and Freddie Mercury\'s rise to fame.', trailer: 'https://www.youtube.com/watch?v=mP0VHJYFOAU' },
      { id: 92, emoji: '🎼', title: 'Amadeus', genre: 'Music', year: 1984, rating: 8.3, tags: ['music', 'mozart', 'biography'], desc: 'The story of the rivalry between composers Mozart and Salieri.', trailer: 'https://www.youtube.com/watch?v=3LmV9weCEdM' },
      { id: 93, emoji: '🎤', title: 'Clika', genre: 'Music', year: 2025, rating: 7.0, tags: ['music', 'mexican-american', 'musician'], desc: 'A small town musician from Yuba County pushes to carve out a place in Mexican-American music after a clip of his song goes viral.', trailer: 'https://www.youtube.com/watch?v=1B8L9Z7L3wY' },
      { id: 94, emoji: '🎸', title: 'Springsteen: Deliver Me From Nowhere', genre: 'Music', year: 2025, rating: 7.5, tags: ['music', 'biography', 'springsteen'], desc: 'Bruce Springsteen biopic starring Jeremy Allen White as "The Boss." Focuses on the making of his 1982 "Nebraska" album.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' },
      { id: 95, emoji: '💕', title: 'Love Songs', genre: 'Music', year: 2025, rating: 7.0, tags: ['music', 'romance', 'musicians'], desc: 'A heartfelt romantic drama about two aspiring musicians whose lives intertwine through melody, longing, and the courage to be themselves.', trailer: 'https://www.youtube.com/watch?v=5g7z7bKpXUo' },
      // WAR
      { id: 96, emoji: '🌞', title: 'Tunnels: Sun in the Dark', genre: 'War', year: 2025, rating: 7.0, tags: ['vietnamese', 'war'], desc: 'A Vietnamese war film about the struggles of soldiers during the conflict.', trailer: 'https://www.youtube.com/watch?v=5g7z7bKpXUo' },
      { id: 97, emoji: '🎖️', title: 'Saving Private Ryan', genre: 'War', year: 1998, rating: 8.6, tags: ['war', 'soldiers', 'spielberg'], desc: 'A group of soldiers is sent to find and bring home a paratrooper whose brothers have been killed in action.', trailer: 'https://www.youtube.com/watch?v=zwhP5b4tD6g' },
      { id: 98, emoji: '🏃', title: '1917', genre: 'War', year: 2019, rating: 8.2, tags: ['war', 'one-shot', 'survival'], desc: 'Two young British soldiers are given a mission to deliver a message that could save 1,600 men.', trailer: 'https://www.youtube.com/watch?v=YqNYrYUiMfg' },
      { id: 99, emoji: '🇮🇳', title: '120 Bahadur', genre: 'War', year: 2025, rating: 7.5, tags: ['war', 'indian', '1962'], desc: 'Based on the heroic true story of the 1962 India-China War\'s Battle of Rezang La. Stars Farhan Akhtar as Major Shaitan Singh Bhati.', trailer: 'https://www.youtube.com/watch?v=mLxVFlCgX0M' },
      { id: 100, emoji: '⚔️', title: 'Warfare', genre: 'War', year: 2025, rating: 8.0, tags: ['war', 'iraq', 'seal'], desc: 'A critically acclaimed Iraq War film inspired by real Navy SEAL experiences. Directed by Alex Garland.', trailer: 'https://www.youtube.com/watch?v=3X8t5nYq5kI' }
    ];

    // ============================================================
    // APP — All Functionality
    // ============================================================

    console.log('🎬 MRE.PRO loaded!', movies.length, 'movies');

    // POSTER SYSTEM
    const posterCache = {};

    async function fetchPosterFromTMDB(movie) {
      if (posterCache[movie.id] !== undefined) return posterCache[movie.id];
      if (!TMDB_KEY || TMDB_KEY === 'YOUR_TMDB_API_KEY_HERE') {
        posterCache[movie.id] = null;
        return null;
      }
      try {
        const url =
          `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(movie.title)}&year=${movie.year}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.results && data.results.length > 0 && data.results[0].poster_path) {
          const posterUrl = TMDB_IMG + data.results[0].poster_path;
          posterCache[movie.id] = posterUrl;
          return posterUrl;
        } else {
          posterCache[movie.id] = null;
          return null;
        }
      } catch (error) {
        console.warn('⚠️ Failed to fetch poster for:', movie.title);
        posterCache[movie.id] = null;
        return null;
      }
    }

    function getPosterSync(movie) {
      return posterCache[movie.id] || null;
    }

    async function loadAllPosters() {
      console.log('🎬 Loading posters from TMDB...');
      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        await fetchPosterFromTMDB(movie);
        updatePosterOnCard(movie);
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      console.log('✅ All posters loaded!');
    }

    function updatePosterOnCard(movie) {
      const posterUrl = getPosterSync(movie);
      const cards = document.querySelectorAll(`.mre-card-poster[data-mid="${movie.id}"]`);
      cards.forEach(card => {
        if (!card) return;
        const loadingEl = card.querySelector('.poster-loading');
        const emojiEl = card.querySelector('.poster-emoji');
        const imgEl = card.querySelector('img');
        if (posterUrl) {
          if (imgEl) { imgEl.src = posterUrl;
            imgEl.style.display = 'block'; }
          if (emojiEl) emojiEl.style.display = 'none';
          if (loadingEl) loadingEl.style.display = 'none';
        } else {
          if (imgEl) imgEl.style.display = 'none';
          if (emojiEl) emojiEl.style.display = 'block';
          if (loadingEl) loadingEl.style.display = 'none';
        }
      });
    }

    // GRAPH
    class MovieGraph {
      constructor() { this.adjacency = {}; }
      addEdge(a, b) {
        if (!this.adjacency[a]) this.adjacency[a] = new Set();
        if (!this.adjacency[b]) this.adjacency[b] = new Set();
        this.adjacency[a].add(b);
        this.adjacency[b].add(a);
      }
      getNeighbors(id) { return this.adjacency[id] ? [...this.adjacency[id]] : []; }
      bfsRecommend(startIds, limit = 6) {
        const visited = new Set(startIds);
        const queue = [...startIds];
        const result = [];
        while (queue.length && result.length < limit) {
          const curr = queue.shift();
          for (const neighbor of this.getNeighbors(curr)) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              result.push(neighbor);
              queue.push(neighbor);
            }
          }
        }
        return result;
      }
    }

    const graph = new MovieGraph();
    movies.forEach((m, i) => {
      movies.forEach((n, j) => {
        if (i >= j) return;
        const sharedTags = m.tags.filter(t => n.tags.includes(t));
        const sameGenre = m.genre === n.genre;
        if (sharedTags.length >= 1 || sameGenre) graph.addEdge(i, j);
      });
    });

    // APP STATE
    let activeGenre = 'All';
    let selectedGraphNode = null;
    let searchTimeout = null;
    const bgColors = ['#1a1a2e', '#16213e', '#0f3460', '#1b1b2f', '#2d132c', '#1a0000', '#0a1628', '#1c1c1c', '#0d1b2a', '#1a1a00', '#001a1a', '#1a001a', '#0a1a0a', '#1a0a1a', '#0a0a1a', '#1a1a0a'];

    // DATA LOADING
    let watchlist = JSON.parse(localStorage.getItem('mrepro_watchlist') || '[]');
    let watchedMovies = JSON.parse(localStorage.getItem('mrepro_watched') || '{}');
    let userRatings = JSON.parse(localStorage.getItem('mrepro_ratings') || '{}');

    function saveAllData() {
      localStorage.setItem('mrepro_watchlist', JSON.stringify(watchlist));
      localStorage.setItem('mrepro_watched', JSON.stringify(watchedMovies));
      localStorage.setItem('mrepro_ratings', JSON.stringify(userRatings));
    }

    function loadAllData() {
      watchlist = JSON.parse(localStorage.getItem('mrepro_watchlist') || '[]');
      watchedMovies = JSON.parse(localStorage.getItem('mrepro_watched') || '{}');
      userRatings = JSON.parse(localStorage.getItem('mrepro_ratings') || '{}');
      updateWatchlistUI();
      renderStats();
      renderCards(movies, 'home-grid');
      renderBrowse();
    }

    // WATCH HISTORY
    function toggleWatched(movie, btn) {
      const today = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      if (watchedMovies[movie.id]) {
        delete watchedMovies[movie.id];
        if (btn) {
          btn.textContent = '+ Watch History';
          btn.style.borderColor = '';
          btn.style.color = '';
        }
        showToast('⏪ Removed from watch history');
      } else {
        watchedMovies[movie.id] = today;
        if (btn) {
          btn.textContent = '✅ Watched on ' + today;
          btn.style.borderColor = '#4caf50';
          btn.style.color = '#4caf50';
        }
        showToast('✅ Marked as watched on ' + today);
      }
      saveAllData();
      updateWatchlistUI();
      renderStats();
      renderCards(movies, 'home-grid');
      renderBrowse();
    }

    // RENDER CARDS
    function renderCards(list, containerId, showRecBadge = false) {
      const grid = document.getElementById(containerId);
      if (!grid) return;
      if (!list || !list.length) {
        grid.innerHTML = '<div class="mre-empty" style="grid-column:1/-1"><i class="ti ti-movie-off"></i>No movies found.</div>';
        return;
      }
      grid.innerHTML = list.map((m) => {
        const saved = watchlist.find(w => w.id === m.id);
        const isWatched = watchedMovies[m.id];
        const posterUrl = getPosterSync(m);
        return `
        <div class="mre-card" onclick="openModal(movies[${m.id}])">
          <div class="mre-card-poster" data-mid="${m.id}" style="background:${bgColors[m.id % bgColors.length]}">
            ${posterUrl ? `<img src="${posterUrl}" alt="${m.title} poster" loading="lazy" />` : ''}
            <span class="poster-emoji" style="${posterUrl ? 'display:none' : 'display:block;position:relative;z-index:1;font-size:48px'}">${m.emoji}</span>
            <div class="poster-loading" style="${posterUrl ? 'display:none' : 'display:flex'}">Loading...</div>
            <span class="mre-genre-badge">${m.genre}</span>
            ${showRecBadge ? '<span class="mre-rec-badge">For you</span>' : ''}
            ${isWatched ? '<span class="watched-badge">✓ Watched</span>' : ''}
          </div>
          <div class="mre-card-info">
            <div class="mre-card-title">${m.title}</div>
            <div class="mre-card-meta">
              <span class="mre-card-year">${m.year}</span>
              <span class="mre-card-rating"><i class="ti ti-star-filled" style="font-size:11px"></i> ${m.rating}</span>
            </div>
            <button class="mre-watchlist-btn ${saved ? 'added' : ''}" onclick="event.stopPropagation(); toggleWatchlist(movies[${m.id}], this)">
              <i class="ti ti-bookmark"></i> ${saved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>`;
      }).join('');
    }

    // HOME SECTIONS
    const GENRE_SECTIONS = [
      { id: 'trending', emoji: '🔥', label: 'Trending', filter: (m) => true },
      { id: 'action', emoji: '🎬', label: 'Action', filter: (m) => m.genre === 'Action' },
      { id: 'scifi', emoji: '🧠', label: 'Sci-Fi', filter: (m) => m.genre === 'Sci-Fi' },
      { id: 'horror', emoji: '😱', label: 'Horror', filter: (m) => m.genre === 'Horror' },
      { id: 'comedy', emoji: '😂', label: 'Comedy', filter: (m) => m.genre === 'Comedy' },
      { id: 'drama', emoji: '🎭', label: 'Drama', filter: (m) => m.genre === 'Drama' },
      { id: 'romance', emoji: '💕', label: 'Romance', filter: (m) => m.genre === 'Romance' },
      { id: 'thriller', emoji: '🔪', label: 'Thriller', filter: (m) => m.genre === 'Thriller' },
      { id: 'pakistani', emoji: '🇵🇰', label: 'Pakistani', filter: (m) => m.genre === 'Pakistani' },
      { id: 'bollywood', emoji: '🇮🇳', label: 'Bollywood', filter: (m) => m.genre === 'Bollywood' },
      { id: 'animation', emoji: '🎨', label: 'Animation', filter: (m) => m.genre === 'Animation' },
      { id: 'crime', emoji: '🔫', label: 'Crime', filter: (m) => m.genre === 'Crime' },
      { id: 'fantasy', emoji: '🧙', label: 'Fantasy', filter: (m) => m.genre === 'Fantasy' },
      { id: 'music', emoji: '🎸', label: 'Music', filter: (m) => m.genre === 'Music' },
      { id: 'war', emoji: '⚔️', label: 'War', filter: (m) => m.genre === 'War' }
    ];

    function renderHomeSections() {
      const container = document.getElementById('home-sections');
      if (!container) return;
      let html = '';
      GENRE_SECTIONS.forEach(section => {
        let filtered = movies.filter(section.filter);
        filtered.sort((a, b) => b.rating - a.rating);
        const top8 = filtered.slice(0, 8);
        if (top8.length === 0) return;
        html += `
        <div class="mre-section">
          <div class="mre-section-header">
            <span class="mre-section-title"><span class="mre-section-emoji">${section.emoji}</span>${section.label}</span>
            <span class="mre-see-all" onclick="goToBrowseWithGenre('${section.label}')">See all →</span>
          </div>
          <div class="mre-cards" id="home-${section.id}"></div>
        </div>`;
      });
      container.innerHTML = html;
      GENRE_SECTIONS.forEach(section => {
        let filtered = movies.filter(section.filter);
        filtered.sort((a, b) => b.rating - a.rating);
        const top8 = filtered.slice(0, 8);
        if (top8.length > 0) {
          renderCards(top8, `home-${section.id}`);
        }
      });
    }

    function goToBrowseWithGenre(genre) {
      activeGenre = genre;
      showPage('browse');
    }

    // WATCHLIST FUNCTIONS
    function toggleWatchlist(movie, btn) {
      const idx = watchlist.findIndex(w => w.id === movie.id);
      if (idx === -1) {
        watchlist.push(movie);
        btn.classList.add('added');
        btn.innerHTML = '<i class="ti ti-bookmark"></i> Saved';
        showToast('"' + movie.title + '" added to watchlist!');
      } else {
        watchlist.splice(idx, 1);
        btn.classList.remove('added');
        btn.innerHTML = '<i class="ti ti-bookmark"></i> Save';
        showToast('"' + movie.title + '" removed from watchlist');
      }
      saveAllData();
      updateWatchlistUI();
    }

    function addToWatchlist(movie) {
      if (!watchlist.find(w => w.id === movie.id)) {
        watchlist.push(movie);
        saveAllData();
        updateWatchlistUI();
        showToast('"' + movie.title + '" added to watchlist!');
      } else {
        showToast('Already in your watchlist!');
      }
    }

    function updateWatchlistUI() {
      const el = document.getElementById('watchlist-items');
      const badge = document.getElementById('wl-badge');
      badge.textContent = watchlist.length;
      badge.style.display = watchlist.length ? 'inline' : 'none';
      document.getElementById('stat-total').textContent = watchlist.length;
      if (watchlist.length) {
        const genres = watchlist.map(m => m.genre);
        const topGenre = genres.sort((a, b) => genres.filter(g => g === b).length - genres.filter(g => g === a).length)[0];
        const avgRating = (watchlist.reduce((s, m) => s + m.rating, 0) / watchlist.length).toFixed(1);
        document.getElementById('stat-genre').textContent = topGenre;
        document.getElementById('stat-rating').textContent = avgRating;
      } else {
        document.getElementById('stat-genre').textContent = '—';
        document.getElementById('stat-rating').textContent = '—';
      }
      if (!watchlist.length) {
        el.innerHTML = '<div class="mre-empty"><i class="ti ti-bookmark"></i>No movies saved yet. Browse and add some!</div>';
        document.getElementById('rec-grid').innerHTML = '<div class="mre-empty" style="grid-column:1/-1"><i class="ti ti-graph"></i>Add movies to your watchlist to get graph recommendations!</div>';
        return;
      }
      el.innerHTML = watchlist.map((m, i) => `
        <div class="mre-watchlist-item">
          <span class="mre-wl-emoji">${m.emoji}</span>
          <div class="mre-wl-info">
            <div class="mre-wl-title">${m.title}</div>
            <div class="mre-wl-genre">${m.genre} · ${m.year} · ⭐ ${m.rating}</div>
          </div>
          <span class="mre-wl-remove" onclick="removeFromWatchlist(${i})"><i class="ti ti-trash"></i></span>
        </div>`).join('');
      const watchlistIds = watchlist.map(m => m.id);
      const recIds = graph.bfsRecommend(watchlistIds, 6);
      const recMovies = recIds.map(id => movies[id]);
      renderCards(recMovies, 'rec-grid', true);
      renderStats();
    }

    function removeFromWatchlist(i) {
      watchlist.splice(i, 1);
      saveAllData();
      updateWatchlistUI();
    }

    function clearWatchlist() {
      if (!watchlist.length) return;
      if (confirm('Clear your entire watchlist?')) {
        watchlist = [];
        saveAllData();
        updateWatchlistUI();
        showToast('Watchlist cleared!');
      }
    }

    // SEARCH
    function setupSearch() {
      const input = document.getElementById('search-input');
      input.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          const q = this.value.toLowerCase().trim();
          if (!q) {
            renderCards(movies, 'home-grid');
            return;
          }
          const filtered = movies.filter(m =>
            m.title.toLowerCase().includes(q) ||
            m.genre.toLowerCase().includes(q) ||
            m.tags.join(' ').toLowerCase().includes(q) ||
            String(m.year).includes(q)
          );
          renderCards(filtered, 'home-grid');
        }, 300);
      });
    }

    // PAGE NAVIGATION
    function showPage(page) {
      document.querySelectorAll('.mre-page').forEach(p => p.classList.remove('active'));
      document.getElementById('page-' + page).classList.add('active');
      document.querySelectorAll('.mre-nav-links a').forEach((a, i) => {
        const pages = ['home', 'watchlist', 'browse', 'popular', 'stats', 'ds'];
        a.classList.toggle('active', pages[i] === page);
      });
      if (page === 'browse') renderBrowse();
      if (page === 'home') { renderCards(movies, 'home-grid');
        renderHomeSections(); }
      if (page === 'popular') renderPopular();
      if (page === 'stats') renderStats();
      if (page === 'ds') { renderDSStack(); renderDSQueue(); renderGraph(null); renderTree(); }
    }

    function goToBrowse() {
      activeGenre = 'All';
      showPage('browse');
    }

    // BROWSE
    function renderBrowse() {
      let list = activeGenre === 'All' ? [...movies] : movies.filter(m => m.genre === activeGenre);
      const sort = document.getElementById('sortSelect');
      const v = sort ? sort.value : 'rating';
      if (v === 'rating') list.sort((a, b) => b.rating - a.rating);
      if (v === 'year') list.sort((a, b) => b.year - a.year);
      if (v === 'title') list.sort((a, b) => a.title.localeCompare(b.title));
      const genres = ['All', ...new Set(movies.map(m => m.genre))];
      document.getElementById('genre-pills').innerHTML = genres.map(g =>
        `<span class="mre-genre-pill ${g === activeGenre ? 'active' : ''}" onclick="filterByGenre('${g}')">${g}</span>`
      ).join('');
      renderCards(list, 'browse-grid');
    }

    function filterByGenre(genre) {
      activeGenre = genre;
      renderBrowse();
    }

    // MODAL
    function openModal(movie) {
      const emojiEl = document.getElementById('modal-emoji');
      const posterImg = document.getElementById('modal-poster-img');
      const posterUrl = getPosterSync(movie);
      if (posterUrl) {
        posterImg.src = posterUrl;
        posterImg.classList.add('visible');
        emojiEl.classList.add('hidden');
      } else {
        posterImg.classList.remove('visible');
        emojiEl.classList.remove('hidden');
        emojiEl.textContent = movie.emoji;
        if (posterCache[movie.id] === undefined) {
          fetchPosterFromTMDB(movie).then(() => {
            const newUrl = getPosterSync(movie);
            if (newUrl) {
              posterImg.src = newUrl;
              posterImg.classList.add('visible');
              emojiEl.classList.add('hidden');
            }
          });
        }
      }
      document.getElementById('modal-title').textContent = movie.title;
      document.getElementById('modal-meta').textContent = movie.genre + ' · ' + movie.year + ' · ⭐ ' + movie.rating;
      document.getElementById('modal-desc').textContent = movie.desc;
      const starsEl = document.getElementById('modal-stars');
      starsEl.innerHTML = renderStars(movie.id);
      const trailerEl = document.getElementById('modal-trailer');
      trailerEl.innerHTML = movie.trailer ?
        `<a href="${movie.trailer}" target="_blank" class="mre-trailer-btn">▶ Watch Trailer on YouTube</a>` :
        `<span style="font-size:12px;color:#555">No trailer available</span>`;
      const wlBtn = document.getElementById('modal-wl-btn');
      wlBtn.textContent = watchlist.find(w => w.id === movie.id) ? '✓ In Watchlist' : '+ Add to Watchlist';
      wlBtn.onclick = () => { addToWatchlist(movie);
        wlBtn.textContent = '✓ In Watchlist'; };
      const histBtn = document.getElementById('modal-hist-btn');
      const isWatched = watchedMovies[movie.id];
      if (isWatched) {
        histBtn.textContent = '✅ Watched on ' + isWatched;
        histBtn.style.borderColor = '#4caf50';
        histBtn.style.color = '#4caf50';
      } else {
        histBtn.textContent = '+ Watch History';
        histBtn.style.borderColor = '';
        histBtn.style.color = '';
      }
      histBtn.onclick = () => toggleWatched(movie, histBtn);
      const neighbors = graph.getNeighbors(movie.id).slice(0, 5);
      document.getElementById('modal-similar').innerHTML = neighbors.map(id =>
        `<span class="mre-similar-chip" onclick="closeModalDirect();openModal(movies[${id}])">${movies[id].emoji} ${movies[id].title}</span>`
      ).join('');
      document.getElementById('modal-overlay').classList.add('open');
    }

    function renderStars(movieId) {
      const r = userRatings[movieId] || 0;
      return [1, 2, 3, 4, 5].map(s =>
        `<span class="mre-star ${s <= r ? 'active' : ''}" onclick="rateMovie(${movieId},${s})" title="${s} star">★</span>`
      ).join('') + `<span class="mre-rating-label">${r ? r+'/5 your rating' : 'Rate this movie'}</span>`;
    }

    function rateMovie(movieId, stars) {
      userRatings[movieId] = stars;
      document.getElementById('modal-stars').innerHTML = renderStars(movieId);
      showToast('Rated ' + stars + ' ⭐ — saved!');
      saveAllData();
      renderRatedGrid();
      renderStats();
    }

    function renderRatedGrid() {
      const ratedIds = Object.keys(userRatings).map(Number);
      const el = document.getElementById('rated-grid');
      if (!el) return;
      if (!ratedIds.length) {
        el.innerHTML = '<div class="mre-empty" style="grid-column:1/-1"><i class="ti ti-star"></i>Rate movies from their detail page!</div>';
        return;
      }
      renderCards(ratedIds.map(id => movies[id]), 'rated-grid');
    }

    function closeModal(e) {
      if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
    }

    function closeModalDirect() {
      document.getElementById('modal-overlay').classList.remove('open');
    }

    // STATS
    const GENRE_COLORS = ['#e53935', '#f5a623', '#4caf50', '#2196f3', '#9c27b0', '#00bcd4', '#ff5722', '#607d8b'];
    const AVG_RUNTIME = 110;

    function renderStats() {
      const watchedCount = Object.keys(watchedMovies).length;
      const saved = watchlist.length;
      const ratedIds = Object.keys(userRatings).map(Number);
      const rated = ratedIds.length;
      const hours = Math.round((watchedCount * AVG_RUNTIME) / 60 * 10) / 10;
      document.getElementById('stats-hours').textContent = hours || 0;
      document.getElementById('stats-hours-sub').textContent = watchedCount ?
        'Based on ' + watchedCount + ' movies watched · ~' + AVG_RUNTIME + ' min avg' :
        'Add movies to your watch history to track time!';
      document.getElementById('stats-watched').textContent = watchedCount;
      document.getElementById('stats-watched-sub').textContent = watchedCount ? 'Keep watching! 🎬' : 'Mark movies as watched to track!';
      document.getElementById('stats-saved').textContent = saved;
      document.getElementById('stats-saved-sub').textContent = saved ? saved + ' movies queued up!' : 'Save movies you want to watch';
      document.getElementById('stats-rated').textContent = rated;
      document.getElementById('stats-avg-rating').textContent = rated ?
        'Avg: ' + (ratedIds.reduce((s, id) => s + (userRatings[id] || 0), 0) / rated).toFixed(1) + ' / 5' :
        'Rate movies to see avg';
      const allMoviesTracked = [...watchlist, ...ratedIds.map(id => movies[id])];
      if (allMoviesTracked.length) {
        const genreCount = {};
        allMoviesTracked.forEach(m => { if (m) genreCount[m.genre] = (genreCount[m.genre] || 0) + 1; });
        const topG = Object.entries(genreCount).sort((a, b) => b[1] - a[1])[0];
        document.getElementById('stats-top-genre').textContent = topG[0];
        document.getElementById('stats-genre-count').textContent = topG[1] + ' movies in this genre';
        renderPieChart(genreCount);
      } else {
        document.getElementById('stats-top-genre').textContent = '—';
        document.getElementById('stats-genre-count').textContent = 'Save or rate movies first!';
      }
      renderRatingBars();
      renderAchievements(watchedCount, saved, rated);
    }

    function renderPieChart(genreCount) {
      const canvas = document.getElementById('pie-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const entries = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
      const total = entries.reduce((s, [, v]) => s + v, 0);
      let start = -Math.PI / 2;
      ctx.clearRect(0, 0, 160, 160);
      entries.forEach(([genre, count], i) => {
        const slice = (count / total) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(80, 80);
        ctx.arc(80, 80, 75, start, start + slice);
        ctx.closePath();
        ctx.fillStyle = GENRE_COLORS[i % GENRE_COLORS.length];
        ctx.fill();
        start += slice;
      });
      ctx.beginPath();
      ctx.arc(80, 80, 35, 0, Math.PI * 2);
      ctx.fillStyle = document.body.classList.contains('light') ? '#fff' : '#111';
      ctx.fill();
      ctx.fillStyle = document.body.classList.contains('light') ? '#111' : '#fff';
      ctx.font = 'bold 13px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(entries.length + ' genres', 80, 80);
      document.getElementById('pie-legend').innerHTML = entries.map(([genre, count], i) =>
        `<div class="mre-pie-leg-item">
          <div class="mre-pie-leg-dot" style="background:${GENRE_COLORS[i%GENRE_COLORS.length]}"></div>
          <span>${genre} <span style="color:#555">(${Math.round(count/total*100)}%)</span></span>
        </div>`
      ).join('');
    }

    function renderRatingBars() {
      const el = document.getElementById('rating-bars');
      if (!el) return;
      const ratedIds = Object.keys(userRatings).map(Number);
      if (!ratedIds.length) {
        el.innerHTML = '<div style="color:#555;font-size:13px">Rate some movies to see your distribution!</div>';
        return;
      }
      const dist = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      ratedIds.forEach(id => { dist[userRatings[id]] = (dist[userRatings[id]] || 0) + 1; });
      const max = Math.max(...Object.values(dist)) || 1;
      el.innerHTML = [5, 4, 3, 2, 1].map(s =>
        `<div class="mre-bar-row">
          <div class="mre-bar-label">${'★'.repeat(s)}</div>
          <div class="mre-bar-track">
            <div class="mre-bar-fill" style="width:${(dist[s]/max)*100}%;background:${s>=4?'#f5a623':s===3?'#e53935':'#555'}"></div>
          </div>
          <div class="mre-bar-val">${dist[s]}</div>
        </div>`
      ).join('');
    }

    function renderAchievements(watched, saved, rated) {
      const el = document.getElementById('achievements-grid');
      if (!el) return;
      const achs = [
        { icon: '🎬', name: 'First Watch', desc: 'Watch your first movie', done: watched >= 1 },
        { icon: '🔖', name: 'Collector', desc: 'Save 5 movies to watchlist', done: saved >= 5 },
        { icon: '⭐', name: 'Critic', desc: 'Rate 3 movies', done: rated >= 3 },
        { icon: '🎭', name: 'Genre Explorer', desc: 'Save movies in 3 genres', done: (() => { const gs = new Set(watchlist.map(m => m.genre)); return gs.size >= 3; })() },
        { icon: '🧠', name: 'Movie Buff', desc: 'Watch 5 movies', done: watched >= 5 },
        { icon: '🏆', name: 'Cinema Expert', desc: 'Rate 10 movies', done: rated >= 10 },
      ];
      el.innerHTML = achs.map(a =>
        `<div class="mre-ach-badge ${a.done?'unlocked':''}">
          <div class="mre-ach-icon">${a.icon}</div>
          <div>
            <div class="mre-ach-info-name">${a.name} ${a.done?'✓':''}</div>
            <div class="mre-ach-info-desc">${a.desc}</div>
          </div>
        </div>`
      ).join('');
    }

    // POPULAR
    function renderPopular() {
      const sorted = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 16);
      const grid = document.getElementById('popular-grid');
      if (!grid) return;
      grid.innerHTML = sorted.map((m, i) => `
        <div class="mre-popular-card" data-movie-id="${m.id}">
          <div class="mre-popular-rank">#${i+1}</div>
          <div style="font-size:28px">${m.emoji}</div>
          <div class="mre-popular-info">
            <div class="mre-popular-title">${m.title}</div>
            <div class="mre-popular-meta">${m.genre} · ${m.year}</div>
          </div>
          <div class="mre-popular-rating">⭐ ${m.rating}</div>
        </div>
      `).join('');
      grid.querySelectorAll('.mre-popular-card').forEach(el => {
        el.onclick = () => openModal(movies[parseInt(el.dataset.movieId)]);
      });
      renderRatedGrid();
    }

    // THEME
    function toggleTheme() {
      document.body.classList.toggle('light');
      const isLight = document.body.classList.contains('light');
      const btn = document.getElementById('theme-btn');
      if (btn) btn.textContent = isLight ? '☀️ Light' : '🌙 Dark';
    }

    // DATA STRUCTURES - STACK
    class Stack {
      constructor() { this.items = []; }
      push(item) { this.items.push(item); }
      pop() { return this.items.length ? this.items.pop() : null; }
      peek() { return this.items.length ? this.items[this.items.length - 1] : null; }
      isEmpty() { return this.items.length === 0; }
      size() { return this.items.length; }
    }

    class Queue {
      constructor() { this.items = []; }
      enqueue(item) { this.items.push(item); }
      dequeue() { return this.items.length ? this.items.shift() : null; }
      front() { return this.items[0]; }
      isEmpty() { return this.items.length === 0; }
      size() { return this.items.length; }
    }

    const demoStack = new Stack();
    const demoQueue = new Queue();

    function renderDSStack() {
      const sel = document.getElementById('stack-movie-select');
      sel.innerHTML = movies.map((m, i) => `<option value="${i}">${m.emoji} ${m.title}</option>`).join('');
    }

    function renderStackVisual() {
      const vis = document.getElementById('stack-visual');
      if (demoStack.isEmpty()) {
        vis.innerHTML = '<div style="color:#333;font-size:13px">Stack is empty — push a movie!</div>';
        return;
      }
      vis.innerHTML = demoStack.items.map((m, i) => {
        const isTop = i === demoStack.items.length - 1;
        return `<div class="mre-stack-item ${isTop ? 'top' : ''}">${m.emoji} ${m.title} ${isTop ? '← TOP' : ''}</div>`;
      }).join('');
    }

    function stackPush() {
      const idx = parseInt(document.getElementById('stack-movie-select').value);
      demoStack.push(movies[idx]);
      renderStackVisual();
      document.getElementById('stack-msg').textContent = '✅ Pushed "' + movies[idx].title + '" onto the stack. Size: ' + demoStack.size();
    }

    function stackPop() {
      const item = demoStack.pop();
      renderStackVisual();
      document.getElementById('stack-msg').textContent = item ? '⬇️ Popped "' + item.title + '" from the stack.' : '❌ Stack is empty!';
    }

    function stackPeek() {
      const item = demoStack.peek();
      document.getElementById('stack-msg').textContent = item ? '👁️ Top of stack: "' + item.title + '"' : '❌ Stack is empty!';
    }

    function renderDSQueue() {
      const sel = document.getElementById('queue-movie-select');
      sel.innerHTML = movies.map((m, i) => `<option value="${i}">${m.emoji} ${m.title}</option>`).join('');
    }

    function renderQueueVisual() {
      const vis = document.getElementById('queue-visual');
      if (demoQueue.isEmpty()) {
        vis.innerHTML = '<div style="color:#333;font-size:13px">Queue is empty!</div>';
        return;
      }
      vis.innerHTML = demoQueue.items.map((m, i) =>
        `<div class="mre-queue-item ${i === 0 ? 'front' : ''}">${m.emoji} ${m.title}${i === 0 ? ' (front)' : ''}</div>`
      ).join('');
    }

    function queueEnqueue() {
      const idx = parseInt(document.getElementById('queue-movie-select').value);
      demoQueue.enqueue(movies[idx]);
      renderQueueVisual();
      document.getElementById('queue-msg').textContent = '✅ Enqueued "' + movies[idx].title + '". Queue size: ' + demoQueue.size();
    }

    function queueDequeue() {
      const item = demoQueue.dequeue();
      renderQueueVisual();
      document.getElementById('queue-msg').textContent = item ? '⬅️ Dequeued "' + item.title + '" from the front.' : '❌ Queue is empty!';
    }

    // DATA STRUCTURES - GRAPH
    function renderGraph(selectedId) {
      selectedGraphNode = selectedId;
      const canvas = document.getElementById('graphCanvas');
      if (!canvas) return;
      const displayMovies = movies.slice(0, 40);
      const W = canvas.offsetWidth || 600;
      const H = 320;
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2,
        cy = H / 2,
        r = Math.min(W, H) * 0.36;
      const positions = displayMovies.map((m, i) => {
        const angle = (i / displayMovies.length) * Math.PI * 2 - Math.PI / 2;
        return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
      });
      const neighbors = selectedId !== null && selectedId < displayMovies.length ? new Set(graph.getNeighbors(selectedId).filter(id => id < displayMovies.length)) : new Set();
      displayMovies.forEach((m, i) => {
        graph.getNeighbors(i).forEach(j => {
          if (j <= i || j >= displayMovies.length) return;
          const isHighlighted = selectedId !== null && (i === selectedId || j === selectedId);
          ctx.beginPath();
          ctx.moveTo(positions[i].x, positions[i].y);
          ctx.lineTo(positions[j].x, positions[j].y);
          ctx.strokeStyle = isHighlighted ? '#e53935' : '#222';
          ctx.lineWidth = isHighlighted ? 2 : 0.5;
          ctx.stroke();
        });
      });
      displayMovies.forEach((m, i) => {
        const { x, y } = positions[i];
        const isSelected = i === selectedId;
        const isNeighbor = neighbors.has(i);
        ctx.beginPath();
        ctx.arc(x, y, isSelected ? 22 : 14, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#e53935' : isNeighbor ? '#f5a623' : '#2a2a2a';
        ctx.fill();
        ctx.strokeStyle = isSelected ? '#fff' : isNeighbor ? '#fff' : '#444';
        ctx.lineWidth = isSelected ? 2 : 1;
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.font = (isSelected ? '18px' : '12px') + ' sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(m.emoji, x, y);
        if (isSelected || isNeighbor) {
          ctx.fillStyle = isSelected ? '#fff' : '#f5a623';
          ctx.font = '10px sans-serif';
          ctx.fillText(m.title.length > 10 ? m.title.slice(0, 10) + '…' : m.title, x, y + 20);
        }
      });
      const btnContainer = document.getElementById('graph-movie-btns');
      if (btnContainer) {
        btnContainer.innerHTML = displayMovies.map((m, i) =>
          `<button onclick="renderGraph(${i})" style="background:${i === selectedId ? '#e53935' : '#1a1a1a'};border:1px solid ${i === selectedId ? '#e53935' : '#2a2a2a'};color:${i === selectedId ? '#fff' : '#888'};border-radius:999px;padding:4px 12px;font-size:12px;cursor:pointer;margin:2px;">${m.emoji} ${m.title}</button>`
        ).join('');
      }
      canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
        const my = (e.clientY - rect.top) * (canvas.height / rect.height);
        for (let i = 0; i < positions.length; i++) {
          const { x, y } = positions[i];
          if (Math.hypot(mx - x, my - y) < 22) { renderGraph(i); return; }
        }
      };
      if (selectedId !== null && selectedId < displayMovies.length) {
        const nb = graph.getNeighbors(selectedId).filter(id => id < displayMovies.length);
        document.getElementById('graph-msg').textContent =
          '🔗 "' + displayMovies[selectedId].title + '" is connected to ' + nb.length + ' movies: ' + nb.map(id => displayMovies[id].title).join(', ');
      }
    }

    // DATA STRUCTURES - TREE
    class TreeNode {
      constructor(value) { this.value = value;
        this.children = []; }
      addChild(node) { this.children.push(node); return node; }
    }

    function buildGenreTree() {
      const root = new TreeNode('All Movies');
      const genres = [...new Set(movies.map(m => m.genre))];
      genres.forEach(genre => {
        const genreNode = root.addChild(new TreeNode(genre));
        movies.filter(m => m.genre === genre).forEach(m => genreNode.addChild(new TreeNode(m.title)));
      });
      return root;
    }

    function renderTree() {
      const tree = buildGenreTree();
      const container = document.getElementById('tree-visual');
      if (!container) return;
      container.innerHTML = renderTreeNode(tree, true);
    }

    function renderTreeNode(node, isRoot = false) {
      const boxClass = isRoot ? 'root' : node.children.length && node.children[0].children.length === 0 ? 'genre' : '';
      let html = `<div class="mre-tree-node">
        <div class="mre-tree-node-box ${boxClass}" onclick="treeNodeClick('${node.value}')">${node.value}</div>`;
      if (node.children.length) {
        html += `<div class="mre-tree-children">${node.children.map(c => `<div class="mre-tree-child">${renderTreeNode(c)}</div>`).join('')}</div>`;
      }
      html += '</div>';
      return html;
    }

    function treeNodeClick(value) {
      const movie = movies.find(m => m.title === value);
      if (movie) { openModal(movie); return; }
      const genre = movies.find(m => m.genre === value);
      if (genre) { filterByGenre(value);
        showPage('browse'); }
      document.getElementById('tree-msg').textContent = value === 'All Movies' ?
        'Root node: contains all ' + movies.length + ' movies.' :
        movies.find(m => m.genre === value) ?
        'Genre: ' + value + ' — ' + movies.filter(m => m.genre === value).length + ' movies. Click to browse!' :
        'Leaf node: ' + value;
    }

    function showDSTab(tab) {
      const tabs = ['stack', 'queue', 'graph', 'tree'];
      document.querySelectorAll('.mre-ds-tab').forEach((t, i) => t.classList.toggle('active', tabs[i] === tab));
      document.querySelectorAll('.mre-ds-panel').forEach((p, i) => p.classList.toggle('active', tabs[i] === tab));
      if (tab === 'graph') renderGraph(selectedGraphNode);
      if (tab === 'tree') renderTree();
    }

    // MOVIE OF THE DAY
    const MOTD_COLORS = ['#1a0000', '#001a1a', '#0a001a', '#1a1000', '#001a0a', '#1a000a'];
    let currentMotd = null;

    function pickMotd(animate = false) {
      const m = movies[Math.floor(Math.random() * movies.length)];
      currentMotd = m;
      const titleEl = document.getElementById('motd-title');
      const metaEl = document.getElementById('motd-meta');
      const descEl = document.getElementById('motd-desc');
      const emojiEl = document.getElementById('motd-emoji-bg');
      const bgEl = document.getElementById('motd-bg');
      if (animate) {
        [titleEl, descEl].forEach(el => { el.style.opacity = '0';
          el.style.transform = 'translateY(16px)'; });
      }
      setTimeout(() => {
        titleEl.textContent = m.emoji + ' ' + m.title;
        metaEl.textContent = m.genre + ' · ' + m.year + ' · ⭐ ' + m.rating;
        descEl.textContent = m.desc;
        emojiEl.textContent = m.emoji;
        bgEl.style.background = 'linear-gradient(135deg, #0d0d0d 40%, ' + MOTD_COLORS[m.id % MOTD_COLORS.length] + ' 100%)';
        if (animate) {
          [titleEl, descEl].forEach(el => {
            el.style.transition = 'all 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        }
        document.getElementById('motd-wl-btn').onclick = () => addToWatchlist(m);
        document.getElementById('motd-detail-btn').onclick = () => openModal(m);
      }, animate ? 200 : 0);
    }

    // TOAST
    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toast._timeout);
      toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    // INIT
    loadAllData();
    renderCards(movies, 'home-grid');
    renderHomeSections();
    renderPopular();
    pickMotd(false);
    setupSearch();

    setTimeout(() => {
      loadAllPosters();
    }, 800);

    console.log('🎬 MRE.PRO is ready!');
    console.log('📊 ' + movies.length + ' movies loaded');
    console.log('🎭 Genres:', [...new Set(movies.map(m => m.genre))].join(', '));
    console.log('✅ All features ready!');