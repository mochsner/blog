---
layout: post-hidden
title: "Ubuntu Intro"
date: 2022-10-26
permalink: /js/:slug
categories: [js]
---

Okay, so welcome to Ubuntu Desktop 20.04. It's a great operating system, and what I use in my day-to-day as a developer. You're on a version branded "Ubuntu Desktop", which is very similar to Ubuntu Server, with one major difference: desktop has a GUI. Server does not (so it focuses entirely on data processing). There's newer versions of Ubuntu, such as 21.04 (don't ask why it's always "4"), and 22.04 LTS. I tend to stay away from the latest, and on Long-Term Support (LTS) versions, because:

(1) they're most compatible and tested with programs made for Linux (Typically, production environments today, 2022-10-25, would either be on Ubuntu 18.04 or Ubuntu 20.04 latest, so it's good to work alongside what most production systems are on)

(2) most Stackoverflow.com, medium.com, etc. type helpful articles aren't on latest versions (think about it: a good article takes months and years to be labelled by SEO as a good article, and then it gets corrected more because of that traffic, giving corrections or "additional tips" to the author that are added on)

Here's the release and support table on [Ubuntu's webpage](https://wiki.ubuntu.com/):
<div><table><tbody><tr>  <td><p class="line891"><strong>Released (Current &amp; Stable)</strong></p></td>
  <td><p class="line891"><strong>Version</strong></p></td>
  <td><p class="line891"><strong>Release Schedule</strong></p></td>
  <td><p class="line891"><strong>Support Date</strong></p></td>
</tr>
<tr>  <td><span class="anchor" id="line-40"></span><p class="line891"><a href="/XenialXerus/ReleaseNotes">Xenial Xerus</a></p></td>
  <td><p class="line862">16.04 LTS</p></td>
  <td><p class="line862">April 21, 2016</p></td>
  <td><p class="line862">Supported until April 2021</p></td>
</tr>
<tr>  <td><span class="anchor" id="line-41"></span><p class="line891"><a href="/BionicBeaver/ReleaseNotes">Bionic Beaver</a></p></td>
  <td><p class="line862">18.04 LTS</p></td>
  <td><p class="line862">April 26, 2018</p></td>
  <td><p class="line862">Supported until April 2023</p></td>
</tr>
<tr>  <td><span class="anchor" id="line-42"></span><p class="line891"><a href="/FocalFossa/ReleaseNotes">Focal Fossa</a></p></td>
  <td><p class="line862">20.04 LTS</p></td>
  <td><p class="line862">April 23, 2020</p></td>
  <td><p class="line862">Supported until April 2025</p></td>
</tr>
<tr>  <td><span class="anchor" id="line-43"></span><p class="line891"><a href="/HirsuteHippo/ReleaseNotes">Hirsute Hippo</a></p></td>
  <td><p class="line862">21.04</p></td>
  <td><p class="line862">April 22, 2021</p></td>
  <td><p class="line862">Supported until January 2022</p></td>
</tr>
<tr>  <td><span class="anchor" id="line-44"></span><p class="line891"><a href="/ImpishIndri/ReleaseNotes">Impish Indri</a></p></td>
  <td><p class="line862">21.10</p></td>
  <td><p class="line862">October 14, 2021</p></td>
  <td><p class="line862">Supported until July 2022</p></td>
</tr>
<tr>  <td><span class="anchor" id="line-45"></span><p class="line891"><a href="/JammyJellyfish/ReleaseNotes">Jammy Jellyfish</a></p></td>
  <td><p class="line862">22.04 LTS</p></td>
  <td><p class="line862">April 21, 2022</p></td>
  <td><p class="line862">Supported until July 2027</p></td>
</tr>
<tr>  <td><span class="anchor" id="line-46"></span><p class="line891"><a href="/KineticKudu/ReleaseNotes">Kinetic Kudu</a></p></td>
  <td><p class="line862">22.10</p></td>
  <td><p class="line862">October 20, 2022</p></td>
  <td><p class="line862">Supported until July 2023</p></td>
</tr>
</tbody></table></div>


# Diving into Ubuntu Desktop 20.04

## Programs
Most of everything can and should be done from the command line, but there's a GUI store as well. 

Starting with GUI, then diving into their command line alternatives:

1. **Ubuntu Software**: App Store icon. You can download things using snap packages from here.
2. **Software Updater**: this is used for general software update for Debian (slightly different than 'Ubuntu Software' because it's .deb aka apt installed packages, and 'Ubuntu Software' is snap packages, See [askubuntu](https://askubuntu.com/questions/789668/what-is-the-difference-between-software-updater-and-ubuntu-software-updates) for more) 
3. **Software & Update**: this is used for driver updates, major version upgrades
  _Warning: be careful to avoid major version updates (e.g. to 21.04, 22.04, or 23.04) for now -- Ubuntu will change behavior on major upgrades, and some libraries may not always be compatible or support the upgrade process._
 
### Software Updater, aka "apt", aka debian type installation
- Ubuntu is a debian based linux distribution (debian is by far the most popular derived from distribution, Ubuntu being the most popular of that grouping). That means Ubuntu has support for `apt`, a package manager for debian -- this gets Ubuntu a TON of great packages out-of-the-box. 
- By being debian-based, Ubuntu'll have the `apt` command (used via `sudo apt install <package>`), which gets Ubuntu a TON of great packages out-of-the-box. Apt has official repositories/stores for downloading things, which are where things are normally downloaded from. 
  - In rare cases, you may need to add another source repository (the equivalent of using the Amazon App store from Android... sort of).
  - The ability to add OTHER sources to pull things from, like adding Microsoft as and endpoint to download from, is what makes `apt` so popular - anyone can download from anyone.

### Ubuntu Software, aka "snap"
- Since version 20.04, Ubuntu has it's own format for downloading linux applications that's more akin to the process you may be used to, like the App Store. It has auto-updating, auto-checkins, and everything. And typically doesn't always require the command line.
- You can use via `sudo snap install <snap name>` and view your applications (with great version hsitory and descriptions) via `sudo snap list`
- Snap is great because it's well-maintained by Ubuntu, but it's also a bit limiting - snap apps can _only_ be downloaded from Ubuntu's snapcraft.io - other download locations cannot be added like can be for apt.

### Other package managers (e.g. Flatpak aka .pkg installers)
- There's other package managers, such as flatpaks, which are growing in popularity, similarly to snap. While I would ignore this for now, it's worth knowing it exists. Flatpaks are stored as `.pkg` files, and they're a bit more flexible than Snaps, but they're not quite as low barrier to entry as Ubuntu's snap store. 
  - __Again: I would recommend shying away from this by default, and re-visiting this later on.__
  - Flatpak is the default mechanism used by the GUI Pop_OS store (Pop_OS is another debian derivative), instead of Ubuntu's snap installer files. It does not auto-update by default (but can be enabled). It's more manual and flexible than snap, and less centralized, whilst still being a bit more advanced than `apt`. 



# In Summary
So, yeah, that's about it for now. 

I'll try to update this with more information on particular programs that may be of interest, such as:

1. Files
2. LibreOffice
3. Settings
4. GNOME Tweaks (may need to be installed through Ubuntu Software)

Then, some topics to cover for future:
1. Gnome: the UI framework that Ubuntu uses. 
  - This can be used to [install UI extensions](https://extensions.gnome.org/), such as start menus that look more similar to what you're used to.

