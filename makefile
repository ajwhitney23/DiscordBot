all: main

main: main.cpp
	g++ main.cpp production.cpp -o discordhelper.o

clean:
	rm -f *.o