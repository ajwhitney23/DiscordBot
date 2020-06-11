#include <bits/stdc++.h>
#include <string>
using namespace std;

class production
{
    private:
        string script;
        string name;
    public:
        production();
        production(string myScript, string name);
        void executeScript();
        bool validateScript(const char* script);
};