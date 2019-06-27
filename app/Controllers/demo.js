const App = _.use('plugins/App');
module.exports = class extends App {
  constructor(req, res) {
    super();
    this.$axios.get('http://10.244.231.80:8080/macqis/analysis/pictographAnalysis!HtmlInit?beginDate=2019/6/18&endDate=2019/6/18').then(data => console.log(data));
    res.send('ok');
  }
}