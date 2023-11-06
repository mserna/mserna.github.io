import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// local imports
import 'package:matthew_website/screens/homepage.dart';
import 'package:matthew_website/models/projects.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (context) => ProjectsModel(),
      child: MaterialApp(
        title: 'Matthew\'s Website',
        theme: ThemeData(
          useMaterial3: true,
          colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        ),
        home: MyHomePage(),
      ),
    );
  }
}

void main() {
  runApp(const MyApp());
}
