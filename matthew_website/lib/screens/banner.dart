import 'package:flutter/material.dart';

class BigCard extends StatelessWidget {
  const BigCard({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final style = theme.textTheme.displayMedium!.copyWith(
      color: theme.colorScheme.onPrimary,
    );

    return Card(
      color: theme.colorScheme.primary,
      child: Padding(
        padding: const EdgeInsets.all(80.0),
        child: Text(
          "Matthew's Website",
          style: style,
        ),
      ),
    );
  }
}

class BannerPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          BigCard(),
          SizedBox(height: 10),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ElevatedButton.icon(
                onPressed: () {
                  print("Go to work experience page");
                },
                icon: Icon(Icons.work_history),
                label: Text("Experience"),
              ),
              SizedBox(width: 10),
              ElevatedButton.icon(
                onPressed: () {
                  print("Go to projects page");
                },
                icon: Icon(Icons.code),
                label: Text("Projects"),
              ),
              SizedBox(width: 10),
              ElevatedButton.icon(
                onPressed: () {
                  print("Go to achievements page");
                },
                icon: Icon(Icons.workspace_premium),
                label: Text("Achievements"),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
