# Anno 1404 Helper

Anno 1404 population reader, consumption calculator, production chain viewer and layout viewer built with Tauri + React + MUI

# Why?

For large worlds it's hard to keep track of consumption.
It's especially hard to re-enter the population every time into an online calculator.

# How does it work?

The rust backend uses the windows api to [ReadProcessMemory](https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-readprocessmemory) from the game to obtain the population data.
This data is sent to the react frontend which displays it.

It uses a static pointer and pointer offsets to obtain the address of the population in the game.
These pointers can be different in different game versions.
Check out the other section on how to find these pointers.

# What about multiplayer?

Populations are stored differently in multiplayer.
But I found out that it kinda works but only for the first player.
Yes, this also means that you can the population of other players.
If you happen to have friends, go ahead and find addresses for multiplayer.

# Finding a pointer path for your game version

## Requirements

- [Cheat Engine](https://cheatengine.org/)
- A savegame including:
  - multiple islands (why? Reduces the amount of addresses found)
  - beggers (why? beggers seem to be the civilization stage with the lowest index)
- 30 Minutes

## Process

### Finding the addresses of beggers

1. Open the game, load your savegame, open Cheat Engine
2. In cheat engine type in the amount of beggers you have
3. Press "new scan" -> "first scan"
4. Repeat step 2 and press "next scan"
5. Repeat step 4 until all addresses point to your amount of beggers

### Finding the pointer path

1. Copy one of the addresses to the address list
2. Right click -> "pointer scan for this address"
3. Set "Max level" to 1 and Maximum offset to 10000
4. Click "Ok" and save the pointer map
5. Restart your game (do not close cheat engine!)
6. Find the address of beggers again and add it to the address list
7. Goto your pointer map -> "pointer scanner" -> "rescan memory" search for the new pointer
8. If everything worked, you should see some pointer paths
9. Repeat step 1 and step 6 with all addresses if you do not find any results
