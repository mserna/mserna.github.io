import 'package:flutter/material.dart';
import 'package:matthew_website/screens/achievements.dart';

// local imports
import 'package:matthew_website/screens/banner.dart';
import 'package:matthew_website/screens/experience.dart';
import 'package:matthew_website/screens/projects.dart';

class MyHomePage extends StatefulWidget {
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  var selectedIndex = 0;

  @override
  Widget build(BuildContext context) {
    Widget page;
    switch (selectedIndex) {
      case 0:
        page = BannerPage();
        break;
      case 1:
        page = ExperiencePage();
        break;
      case 2:
        page = ProjectsPage();
        break;
      case 3:
        page = AchievementsPage();
        break;
      default:
        throw UnimplementedError('no widget for $selectedIndex');
    }

    return LayoutBuilder(builder: (context, constraints) {
      return Scaffold(
        body: Row(
          children: [
            SafeArea(
              child: NavigationRail(
                extended: constraints.maxWidth >= 600,
                destinations: [
                  NavigationRailDestination(
                    icon: Icon(Icons.home),
                    label: Text('Home'),
                  ),
                  NavigationRailDestination(
                    icon: Icon(Icons.work),
                    label: Text('Experience'),
                  ),
                  NavigationRailDestination(
                    icon: Icon(Icons.code),
                    label: Text('Projects'),
                  ),
                  NavigationRailDestination(
                    icon: Icon(Icons.workspace_premium),
                    label: Text('Achievements'),
                  ),
                ],
                selectedIndex: selectedIndex,
                onDestinationSelected: (value) {
                  setState(() {
                    selectedIndex = value;
                  });
                },
              ),
            ),
            Expanded(
              child: Container(
                color: Theme.of(context).colorScheme.primaryContainer,
                child: page,
              ),
            ),
          ],
        ),
      );
    });
  }
}
