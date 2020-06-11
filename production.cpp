#include <bits/stdc++.h>
#include <string>
#include "production.h"
#include <unistd.h>

using namespace std;

production::production(){
    script = "none";
    name = "none";
}

production::production(string myScript, string myName)
{
    script = myScript;
    name = myName;
}

void production::executeScript()
{
    //string toExec = ("konsole 'bash startup.sh " + name + " " +script + "'"); //with konsole
    string toExec = ("bash startup.sh " + name + " " + script); //without konsole
    const char* temp = toExec.c_str();
    //const char* toExectue = ("bash startup.sh " + name + script).c_str();
    system(temp);
    
}