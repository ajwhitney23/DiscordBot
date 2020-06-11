all: main

main: main.cpp
	g++ main.cpp production.cpp -o discordhelper

clean:
	rm -f *.o