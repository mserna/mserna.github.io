import 'package:flutter/material.dart';

class Project {
  final int id;
  final String name;
  final String description;

  const Project({
    required this.id,
    required this.name,
    required this.description
  });
}

class ProjectsModel extends ChangeNotifier {
  var projects = <Project>[];
}
