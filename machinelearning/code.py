import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

data = pd.read_csv('AAPL_stock_data.csv')

data['Next_Close'] = data['Close'].shift(-1)
data['Trend'] = (data['Next_Close'] > data['Close']).astype(int)

data = data[:-1]

features = ['Open', 'High', 'Low', 'Close', 'Volume']
X = data[features]
y = data['Trend']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)

rf_classifier.fit(X_train, y_train)

y_pred = rf_classifier.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy}')
