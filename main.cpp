#include <bits/stdc++.h>
#include <string>
#include "production.h"
using namespace std;
bool mute(string name);
bool deafen(string name);
bool both(string name);

int main(int argc, char **argv)
{
    int todo{0};
    string name;
    string script;

    bool ok = true;

    while (ok)
    {
        cout << "What would you like to do? \n 1: \tMute \n 2: \tDeafen \n 3: \tBoth \n 4: \tTurn off Application" << endl;
        cin >> todo;
        cout << "What is the name of the person you would like to mute?" << endl;
        cin >> name;
        switch (todo)
        {
        case 1:
            script = "mute";
            break;
        case 2:
            script = "deafen";
            break;
        case 3:
            script = "both";
            break;
        case 4:
            ok = false;
            break;
        default:
            script = "none";
            break;
        }
        if(ok)
        {
            production p = production(script, name);
            p.executeScript();
        }
    }

    return 0;
}